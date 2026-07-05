import type { AppResponse, MetaTags } from "@/types/models/AppModel";

export class AppModel {
  private _response: AppResponse;
  constructor(response: AppResponse) {
    this._response = response;
  }

  getTitle(): string {
    return this._response.title ?? "";
  }

  getMetaTags(): MetaTags[] {
    return this._response._metaTags ?? [];
  }
}
