import type { Testimonial } from "@/types/models/TestimonialModel";

export class TestimonialModel {
  private _response: Testimonial;

  constructor(response: Testimonial) {
    this._response = response;
  }

  getQuote(): string {
    return this._response.quote ?? "";
  }

  getAuthorName(): string {
    return this._response.authorName ?? "";
  }

  getAuthorRole(): string {
    return this._response.authorRole ?? "";
  }
}
