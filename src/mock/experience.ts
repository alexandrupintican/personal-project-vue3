import type { Experience } from "@/types/models/ExperienceModel";

// Stand-in for a future GET /api/experience response.
export const experienceMock: Experience[] = [
  {
    id: "bestseller",
    company: "BESTSELLER A/S",
    role: "Frontend Developer",
    location: "Brande, DK",
    startDate: "Feb 2021",
    endDate: "Jul 2026",
    highlights: [
      "Designed and implemented a scalable override system for reusable frontend components and brand-specific customization across 14 international e-commerce websites.",
      "Contributed to the migration from Vue 2/Nuxt 2 to a shared Vue 3, Composition API, TypeScript, Vite and SSR architecture supporting 14 international brands.",
      "Optimized image rendering and frontend performance, improving Core Web Vitals by up to 10 points across multiple brands.",
      "Performed 100+ code reviews, contributing to frontend best practices, code quality and maintainability.",
    ],
  },
  {
    id: "lego",
    company: "The LEGO Group",
    role: "Frontend & Data Support Student",
    location: "Billund, DK",
    startDate: "Feb 2019",
    endDate: "Jan 2020",
    highlights: [
      "Implemented integration testing using OPA5 within SAP Fiori/UI5.",
      "Performed data processing using Python with AWS storage solutions.",
      "Supported the Demand Planning department with testing and automation initiatives.",
    ],
  },
  {
    id: "everis",
    company: "Everis Spain S.L.U",
    role: "Solution Analyst Intern",
    location: "Barcelona, ES",
    startDate: "Aug 2018",
    endDate: "Dec 2018",
    highlights: [
      "Developed frontend features using Angular 5 and TypeScript.",
      "Contributed to backend services using Java Spring Boot, Maven and Hibernate.",
      "Worked in an Agile development environment delivering client-focused solutions.",
    ],
  },
];
