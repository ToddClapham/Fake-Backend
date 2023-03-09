import { IWind } from "../interfaces/IWind";
import { ITurbine } from "../interfaces/ITurbine";
import { Mode } from "./mode.enum";

export class Turbine implements ITurbine {
  IdCode: string;
  Speed: number;
  Direction: number;
  Mode: Mode; // automatic mode means the speed and direction are determined by the wind // ? Is enum necessary or could it just be string?
  Active: boolean; // True means turbine is on, false means turbine is off
  WindAtTurbine: IWind;

  constructor(json: ITurbine) {
    this.IdCode = json.IdCode;
    this.Speed = json.Speed;
    this.Direction = json.Direction;
    this.Mode = json.Mode as Mode;
    this.Active = json.Active;
    this.WindAtTurbine = json.WindAtTurbine
  }
}
