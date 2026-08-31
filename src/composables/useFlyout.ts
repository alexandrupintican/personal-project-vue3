import { initVault } from "@/plugins/vault";
import { ref, Ref } from "vue";

// types
type FlyoutName = "" | "ServiceBarDrawer";
type FlyoutParams = {
  openFrom: "right" | "bottom" | "left" | "top" | "center";
  transition: "fade" | "pop" | "slide";
  fullscreen: boolean;
};
type Flyout = {
  name: FlyoutName;
  params: FlyoutParams;
};
type Vault = {
  useFlyout: {
    flyoutRef: Ref<Flyout>;
    openFlyout(name: FlyoutName, params?: Partial<FlyoutParams>): void;
    closeFlyout(): void;
  };
};

const defaultParams: FlyoutParams = {
  openFrom: "right",
  transition: "slide",
  fullscreen: false,
};

export default function useFlyout() {
  const storage = initVault<Vault>("useFlyout");
  const useFlyout = storage.get("useFlyout");

  if (useFlyout) {
    return useFlyout;
  }

  const flyoutRef: Ref<Flyout> = ref({ name: "", params: defaultParams });
  const queue: Flyout[] = [];

  // Only one flyout may be open at a time. Requesting one while another is
  // already open queues it instead of replacing the current one — the open
  // flyout must be closed first via closeFlyout(). Any params left
  // unspecified fall back to the defaults above.
  function openFlyout(
    name: FlyoutName,
    params: Partial<FlyoutParams> = {},
  ): void {
    const flyout: Flyout = { name, params: { ...defaultParams, ...params } };

    if (flyoutRef.value.name === name) {
      return;
    }

    if (flyoutRef.value.name !== "") {
      if (!queue.some((queued) => queued.name === name)) {
        queue.push(flyout);
      }
      return;
    }

    flyoutRef.value = flyout;
  }

  function closeFlyout(): void {
    if (flyoutRef.value.name === "") {
      return;
    }

    flyoutRef.value = { name: "", params: defaultParams };

    const next = queue.shift();
    if (next) {
      openFlyout(next.name, next.params);
    }
  }

  return storage.storeAndGet("useFlyout", {
    flyoutRef,
    openFlyout,
    closeFlyout,
  });
}
