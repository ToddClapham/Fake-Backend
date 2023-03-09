import { IScenario } from "../interfaces/IScenario";
import { SimState } from "./SimState.enum";

export class Scenario implements IScenario {
  Name: string;
  State: SimState;

  constructor(json: IScenario) {
    this.Name = json.Name;
    switch (json.State) {
      case 'paused':
        this.State = SimState.Paused;
        break;
      case 'resumed':
        this.State = SimState.Resumed;
        break;
      case 'loading':
        this.State = SimState.Loading;
        break;
      case 'unloading':
        this.State = SimState.Unloading;
        break;
      case 'partiallypaused':
        this.State = SimState.PartiallyPaused;
        break;
      case 'partiallyresumed':
        this.State = SimState.PartiallyResumed;
        break;
      default:
        this.State = SimState.Paused;
        break;
    }
  }
}
