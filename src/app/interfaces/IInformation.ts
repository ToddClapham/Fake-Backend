import { IEnvironment } from "./IEnvironment";
import { IOwnship } from "./IOwnship";
import { IScenario } from "./IScenario";
import { IView } from "./IView";

export interface IInformation {
  Ownship: IOwnship;
  Environment: IEnvironment;
  Scenario: IScenario;
  SVD: IView;
}
