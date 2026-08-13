import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/Le_Rocher/",
    server: {
      port: 8080,
    },
  },

  tanstackStart: {
    spa: {
      enabled: true,
    },
  },
});
