import { IPan } from "../interfaces/IPan";

export class Pan implements IPan {
  Increment: number;
  Left: boolean;
  Right: boolean;
  Up: boolean;
  Down: boolean;

  constructor(json: IPan) {
    this.Increment = json.Increment;
    this.Left = json.Left;
    this.Right = json.Right;
    this.Up = json.Up;
    this.Down = json.Down;
  }
}
