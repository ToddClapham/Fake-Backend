import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { Auth401Interceptor } from './app/helpers/auth401.interceptor';
import { FakeAuth401Interceptor } from './app/helpers/fake-auth401.interceptor';
import { fakeBackendProvider } from './app/helpers/fake-backend.interceptor';
import { TokenInterceptor } from './app/helpers/token.interceptor';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    importProvidersFrom(HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: FakeAuth401Interceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: Auth401Interceptor, multi: true },
    fakeBackendProvider
  ]
});
