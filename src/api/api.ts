import type { Technology } from "@/types/models/TechnologyModel";

const API_BASE_URL = "/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, init);

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
