import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { Wind } from '../models/wind.model';
import { Information } from '../models/information.model';
import { Mode } from '../models/mode.enum';
import { SimState } from '../models/SimState.enum';
import { IInformation } from '../interfaces/IInformation';
import { IWind } from '../interfaces/IWind';
import { User } from '../models/user.model';

let users: User[] = JSON.parse(localStorage.getItem('users')!) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/oauth/oauth2callback') && method === 'POST':
                    return authenticate();
                case url.endsWith('/site-state') && method === 'GET':
                    return generateFakeSiteState();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        function authenticate(): Observable<HttpResponse<User>> {
            const [ id, username, firstName, lastName ] = body;
            let user = { id: id, username: username, firstName: firstName, lastName: lastName };
            localStorage.setItem('token', 'fake-jwt-token');
            return ok({
                ...basicDetails(user),
                token: 'fake-jwt-token'
            })
        }

        function generateFakeSiteState(): Observable<HttpResponse<IInformation>> | Observable<never> {
          if (!isLoggedIn()) return unauthorized(); // do the unauthorized thing and then throw an error here
          const siteState = new Information({
            Ownship: {
              Airspeed: 5,
              AltitudeAmsl: 1500,
              HeadingTrue: 98,
              Latitude: 54.790427,
              Longitude: -3.643101,
              WeightOnWheels: false,
              CargoAttached: true,
            },
            Environment: {
              AtOwnship: {
                Wind: {
                  Speed: 5,
                  Direction: 88,
                  Gust: 9
                },
                SeaState: 2,
                Visibility: 500,
                Ceiling: 30000,
                Date: '2023/03/09',
                TimeOfDay: 10
              },
              Windfarm: [
                {
                  IdCode: '1',
                  Speed: 12,
                  Direction: 198,
                  Mode: Mode.AUTOMATIC,
                  Active: true,
                  WindAtTurbine: {
                    Speed: 12,
                    Direction: 88,
                    Gust: 14
                  },
                },
                {
                  IdCode: '2',
                  Speed: 300, // Turbine rotational speed
                  Direction: 189, // Nacelle direction relative to magnetic north
                  Mode: Mode.AUTOMATIC,
                  Active: true,
                  WindAtTurbine: {
                    Speed: 14,
                    Direction: 72,
                    Gust: 18
                  },
                },
              ],
            },
            Scenario: {
              Name: 'Test Run 1',
              State: SimState.Resumed,
            },
            SVD: {
              Azimuth: 0,
              Elevation: 1500,
              ZoomFactor: 1,
            }
          });
          return ok(siteState)
        }

        // helper functions

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); // delay observable to simulate server api call
        }

        function error(message: string) {
            return throwError(() => ({ error: { message } }))
                .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }

        function unauthorized() {
            return throwError(() => ({ status: 401, error: { message: 'Unauthorized' } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function basicDetails(user: any) {
            const { id, username, firstName, lastName } = user;
            return { id, username, firstName, lastName };
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
