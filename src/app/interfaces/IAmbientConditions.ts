import { IWind } from "./IWind";

export interface IAmbientConditions {
  Wind: IWind;
  SeaState: number;
  Visibility: number;
  Ceiling: number;
  Date: string; // ? convert this to date type in the constructor? Convert timezone?
  TimeOfDay: number; // ? is this in seconds or milliseconds? If so, convert to date type?
}
