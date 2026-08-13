import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/Le_Rocher/",
  },

  tanstackStart: {
    spa: {
      enabled: true,
    },
  },
});
