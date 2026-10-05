import type { Profile } from "@/types/models/ProfileModel";

// Stand-in for a future GET /api/profile response.
export const profileMock: Profile = {
  name: "Alexandru",
  role: "Frontend Engineer",
  headline: "I build fast, scalable e-commerce experiences.",
  description:
    "Frontend Software Engineer with 5+ years building enterprise-scale e-commerce platforms using Vue.js, TypeScript and Server-Side Rendering across 14 international brands.",
  primaryCtaLabel: "View My Work",
  secondaryCtaLabel: "Download CV",
  resumeUrl: "/resume.pdf",
};
