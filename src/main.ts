import { createApp } from "vue";
// alias works but not sure why it complains
import "@globalStyle/global.scss";
import { createRouter, createWebHistory } from "vue-router";
import AppRender from "@/AppRender.vue";
import { vaultPlugin } from "@/plugins/vault";
import { createCustomRouter } from "@/router/index.js";
import { createHead } from "@unhead/vue/client";

export function createCustomApp() {
  const app = createApp(AppRender);
  const router = createCustomRouter();
  const head = createHead();

  app.use(head);
  app.use(vaultPlugin);
  app.use(router);
  return { app, router };
}

// createApp(App).mount("#app");
