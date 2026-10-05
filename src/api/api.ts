import type { Technology } from "@/types/models/TechnologyModel";
import { getEnvVariable } from "@/utils/utils";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(
    `${getEnvVariable("VITE_API_URL")}${path}`,
    init,
  );

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function runRequest<T>(endpoint: string): Promise<T> {
  return request<T>(endpoint);
}

function createTechnologyService() {
  const technologyService = {
    getTechnologies: (): Promise<Technology[]> =>
      runRequest<Technology[]>("/technologies"),
  };
  return technologyService;
}

export default {
  technologyService: createTechnologyService(),
};
