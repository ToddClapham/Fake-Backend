import { IEnvironment } from "../interfaces/IEnvironment";
import { IInformation } from "../interfaces/IInformation";
import { IOwnship } from "../interfaces/IOwnship";
import { IScenario } from "../interfaces/IScenario";
import { IView } from "../interfaces/IView";

export class Information implements IInformation {
  Ownship: IOwnship;
  Environment: IEnvironment;
  Scenario: IScenario;
  SVD: IView;

  constructor(json: IInformation) {
    this.Ownship = json.Ownship;
    this.Environment = json.Environment;
    this.Scenario = json.Scenario;
    this.SVD = json.SVD;
  }
}
