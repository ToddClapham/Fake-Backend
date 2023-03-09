import { IOwnship } from "../interfaces/IOwnship";

export class Ownship implements IOwnship {
  Airspeed: number;
  AltitudeAmsl: number;
  HeadingTrue: number;
  Latitude: number;
  Longitude: number;
  WeightOnWheels: boolean;
  CargoAttached: boolean;

  constructor(json: IOwnship) {
    this.Airspeed = json.Airspeed;
    this.AltitudeAmsl = json.AltitudeAmsl;
    this.HeadingTrue = json.HeadingTrue;
    this.Latitude = json.Latitude;
    this.Longitude = json.Longitude;
    this.WeightOnWheels = json.WeightOnWheels;
    this.CargoAttached = json.CargoAttached;
  }
}
