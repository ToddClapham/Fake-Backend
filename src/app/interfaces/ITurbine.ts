import { Mode } from "../models/mode.enum";
import { IWind } from "./IWind";

export interface ITurbine {
  IdCode: string;
  Speed: number;
  Direction: number;
  Mode: Mode; // automatic mode means the speed and direction are determined by the wind // ? Is enum necessary or could it just be string?
  Active: boolean; // True means turbine is on, false means turbine is off
  WindAtTurbine: IWind;
}
