import { IWind } from "../interfaces/IWind";

export class Wind implements IWind {
  Speed: number;
  Direction: number;
  Gust: number;

  constructor(json: IWind) {
    this.Speed = json.Speed;
    this.Direction = json.Direction;
    this.Gust = json.Gust;
  }
}
