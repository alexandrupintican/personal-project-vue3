import { initVault } from "@/plugins/vault";
import { ref, Ref } from "vue";

// types
type Layout = "" | "default";
type Vault = {
  useLayout: {
    layoutRef: Ref<Layout>;
    setLayout(layout: Layout): void;
  };
};

export default function useLayout() {
  const storage = initVault<Vault>("useLayout");
  const useLayout = storage.get("useLayout");

  if (useLayout) {
    return useLayout;
  }

  const layoutRef: Ref<Layout> = ref("default");

  function setLayout(layout: Layout): void {
    if (layoutRef.value === layout) {
      return;
    }

    layoutRef.value = layout;
  }

  return storage.storeAndGet("useLayout", {
    layoutRef,
    setLayout,
  });
}
