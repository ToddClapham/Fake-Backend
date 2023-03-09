import { IView } from "../interfaces/IView";

export class View implements IView {
  Azimuth: number;
  Elevation: number;
  ZoomFactor: number;

  constructor(json: IView) {
    this.Azimuth = json.Azimuth;
    this.Elevation = json.Elevation;
    this.ZoomFactor = json.ZoomFactor;
  }
}
