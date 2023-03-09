import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmbientConditions } from 'src/app/models/ambientConditions.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, OnDestroy {
  siteStateSub!: Subscription;
  windSpeed: number = 0;
  windDirection: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.siteStateSub = this.dataService.siteStateChanged.subscribe(state => {
      // Here we can use the state to set various bits of information in the component
      this.windSpeed = state.Environment.AtOwnship.Wind.Speed;
      this.windDirection = state.Environment.AtOwnship.Wind.Direction;

      // Can return parts of the siteState like this
      const ambient = new AmbientConditions(this.dataService.getAmbientWeather())
      console.log(ambient)
    })
  }

  onPlay() {
    this.dataService.startPolling(5000);
  }

  onPause() {
    this.dataService.stopPolling();
  }

  ngOnDestroy(): void {
    this.siteStateSub.unsubscribe();
  }
}
