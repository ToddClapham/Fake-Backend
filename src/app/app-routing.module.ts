import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataComponent } from "./components/data/data.component";
import { Oauth2callbackComponent } from "./oauth2callback/oauth2callback.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: 'data', component: DataComponent },
  { path: 'oauth2callback', component: Oauth2callbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
