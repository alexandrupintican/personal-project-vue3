import type { Stat } from "@/types/models/StatModel";

// Stand-in for a future GET /api/stats response.
export const statsMock: Stat[] = [
  { icon: "calendar", value: "5+", label: "Years Experience" },
  { icon: "code", value: "14", label: "Brands Supported" },
  { icon: "trophy", value: "100+", label: "Code Reviews" },
  { icon: "zap", value: "+10", label: "Core Web Vitals Points" },
];
