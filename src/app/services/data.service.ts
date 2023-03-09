import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { interval, Subject, Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { IAmbientConditions } from "../interfaces/IAmbientConditions";
import { IInformation } from "../interfaces/IInformation";
import { IOwnship } from "../interfaces/IOwnship";
import { ITurbine } from "../interfaces/ITurbine";

@Injectable({ providedIn: 'root' })
export class DataService {
  private pollingSub!: Subscription;
  private pollingActive: boolean = false;
  private siteState!: IInformation;
  siteStateChanged = new Subject<IInformation>();

  constructor(private httpClient: HttpClient) {}

  fetchSiteState() {
    return this.httpClient.get<IInformation>(`${environment.apiHost}/api/v1/site-state`)
  }

  startPolling(intervalTime: number = 5000) {
    if (!this.pollingActive) {
      this.pollingActive = true;
      this.pollingSub = interval(intervalTime).subscribe(() => {
        this.fetchSiteState()
          .subscribe(siteState => {
            this.siteState = siteState;
            this.siteStateChanged.next(siteState);
          });
      });
    }
  }

  stopPolling() {
    if (this.pollingActive) {
      this.pollingActive = false;
      this.pollingSub.unsubscribe();
    }
  }

  // All information for the whole simulation
  getSiteState(): IInformation {
    return this.siteState;
  }

  // Top right components, bottom left components
  getAmbientWeather(): IAmbientConditions {
    return this.siteState.Environment.AtOwnship
  }

  // Bottom left components
  getOwnship(): IOwnship {
    return this.siteState.Ownship
  }

  // Map information
  getTurbineState(): ITurbine[] {
    return this.siteState.Environment.Windfarm
  }
}
