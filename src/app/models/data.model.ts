import { Wind } from "./wind.model";

export class Data {
  wind: Wind;

  constructor(json: any) {
    this.wind = json.wind
  }
}
