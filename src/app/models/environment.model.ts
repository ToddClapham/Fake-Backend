import { IEnvironment } from "../interfaces/IEnvironment";
import { AmbientConditions } from "./ambientConditions.model";
import { Turbine } from "./turbine.model";

export class Environment implements IEnvironment {
  AtOwnship: AmbientConditions;
  Windfarm: Turbine[];

  constructor(json: IEnvironment) {
    this.AtOwnship = json.AtOwnship;
    this.Windfarm = json.Windfarm;
  }
}
