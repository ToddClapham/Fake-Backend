import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Oauth2callbackComponent } from './oauth2callback/oauth2callback.component';

@Component({
  standalone: true,
  imports: [
    Oauth2callbackComponent,
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fake-backend';

  constructor() {}

  ngOnInit(): void {
  }
}
