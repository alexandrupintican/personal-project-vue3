import type { SocialLink } from "@/types/models/SocialLinkModel";

export class SocialLinkModel {
  private _response: SocialLink;

  constructor(response: SocialLink) {
    this._response = response;
  }

  getLabel(): string {
    return this._response.label ?? "";
  }

  getUrl(): string {
    return this._response.url ?? "";
  }

  getIcon(): string {
    return this._response.icon ?? "";
  }
}
