import type { Stat } from "@/types/models/StatModel";

export class StatModel {
  private _response: Stat;

  constructor(response: Stat) {
    this._response = response;
  }

  getIcon(): string {
    return this._response.icon ?? "";
  }

  getValue(): string {
    return this._response.value ?? "";
  }

  getLabel(): string {
    return this._response.label ?? "";
  }
}
