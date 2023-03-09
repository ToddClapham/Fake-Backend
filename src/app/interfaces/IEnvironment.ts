import { IAmbientConditions } from "./IAmbientConditions";
import { ITurbine } from "./ITurbine";

export interface IEnvironment {
  AtOwnship: IAmbientConditions;
  Windfarm: ITurbine[];
}
