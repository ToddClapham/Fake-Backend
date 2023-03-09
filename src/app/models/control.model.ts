import { IAmbientConditions } from "../interfaces/IAmbientConditions";
import { IControl } from "../interfaces/IControl";
import { IPan } from "../interfaces/IPan";
import { ITurbine } from "../interfaces/ITurbine";
import { IView } from "../interfaces/IView";
import { Action } from "./Action.enum";
import { LoadState } from "./LoadState.enum";
import { Location } from "./Location.enum";

export class Control implements IControl {
  Ownship: {
    Action: Action,
    Location: Location,
    TargetId?: number
  }
  EnvironmentAtOwnship: IAmbientConditions;
  Windfarm: ITurbine[];
  Scenario: {
    Load: string,
    State: LoadState
  }
  SVD: {
    View: IView,
    Pan: IPan
  }

  constructor(json: IControl) {
    this.Ownship = json.Ownship;
    this.EnvironmentAtOwnship = json.EnvironmentAtOwnship;
    this.Windfarm = json.Windfarm;
    this.Scenario = json.Scenario;
    this.SVD = json.SVD;
  }
}
