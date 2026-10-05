import type { Technology } from "@/types/models/TechnologyModel";

export class TechnologyModel {
  private _response: Technology;

  constructor(response: Technology) {
    this._response = response;
  }

  getName(): string {
    return this._response.name ?? "";
  }

  getConfidence(): number {
    return this._response.confidence ?? 0;
  }

  getCategory(): string {
    return this._response.category ?? "";
  }
}
