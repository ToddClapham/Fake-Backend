import { IAmbientConditions } from "../interfaces/IAmbientConditions";
import { IWind } from "../interfaces/IWind";

export class AmbientConditions implements IAmbientConditions {
  Wind: IWind;
  SeaState: number;
  Visibility: number;
  Ceiling: number;
  Date: string; // ? convert this to date type in the constructor? Convert timezone?
  TimeOfDay: number; // ? is this in seconds or milliseconds? If so, convert to date type?

  constructor(json: IAmbientConditions) {
    this.Wind = json.Wind;
    this.SeaState = json.SeaState;
    this.Visibility = json.Visibility;
    this.Ceiling = json.Ceiling;
    this.Date = json.Date;
    this.TimeOfDay = json.TimeOfDay;
  }
}
