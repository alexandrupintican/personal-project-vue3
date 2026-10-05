import { initVault } from "@/plugins/vault";
import api from "@/api/api";
import { TechnologyModel } from "@/models/TechnologyModel";
import { ref, Ref } from "vue";

type Vault = {
  useTechnologies: {
    technologiesRef: Ref<TechnologyModel[]>;
    loadTechnologies(): Promise<void>;
  };
};

export default function useTechnologies() {
  const storage = initVault<Vault>("useTechnologies");
  const useTechnologies = storage.get("useTechnologies");

  if (useTechnologies) {
    return useTechnologies;
  }

  const technologiesRef: Ref<TechnologyModel[]> = ref([]);
  let loadPromise: Promise<void> | null = null;

  function loadTechnologies(): Promise<void> {
    if (!loadPromise) {
      loadPromise = api.technologyService.getTechnologies().then((data) => {
        technologiesRef.value = data.map((tech) => new TechnologyModel(tech));
      });
    }

    return loadPromise;
  }

  return storage.storeAndGet("useTechnologies", {
    technologiesRef,
    loadTechnologies,
  });
}
