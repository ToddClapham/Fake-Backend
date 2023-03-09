import { Action } from "../models/Action.enum";
import { LoadState } from "../models/LoadState.enum";
import { Location } from "../models/Location.enum";
import { IAmbientConditions } from "./IAmbientConditions";
import { IPan } from "./IPan";
import { ITurbine } from "./ITurbine";
import { IView } from "./IView";

export interface IControl {
  Ownship: {
    Action: Action,
    Location: Location,
    TargetId?: number
  };
  EnvironmentAtOwnship: IAmbientConditions;
  Windfarm: ITurbine[];
  Scenario: {
    Load: string,
    State: LoadState
  };
  SVD: {
    View: IView,
    Pan: IPan
  }
}
