import type { Experience } from "@/types/models/ExperienceModel";

export class ExperienceModel {
  private _response: Experience;

  constructor(response: Experience) {
    this._response = response;
  }

  getId(): string {
    return this._response.id ?? "";
  }

  getCompany(): string {
    return this._response.company ?? "";
  }

  getRole(): string {
    return this._response.role ?? "";
  }

  getLocation(): string {
    return this._response.location ?? "";
  }

  getPeriod(): string {
    return `${this._response.startDate} – ${this._response.endDate}`;
  }

  getHighlights(): string[] {
    return this._response.highlights ?? [];
  }
}
