import type { Profile } from "@/types/models/ProfileModel";

export class ProfileModel {
  private _response: Profile;

  constructor(response: Profile) {
    this._response = response;
  }

  getName(): string {
    return this._response.name ?? "";
  }

  getRole(): string {
    return this._response.role ?? "";
  }

  getHeadline(): string {
    return this._response.headline ?? "";
  }

  getDescription(): string {
    return this._response.description ?? "";
  }

  getPrimaryCtaLabel(): string {
    return this._response.primaryCtaLabel ?? "";
  }

  getSecondaryCtaLabel(): string {
    return this._response.secondaryCtaLabel ?? "";
  }

  getResumeUrl(): string {
    return this._response.resumeUrl ?? "";
  }
}
