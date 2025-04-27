import { defineStore } from "pinia";

import type { IAlert } from "@/types/alert";

export const useRootStore = defineStore("rootStore", () => {
  /**
   * Alert notification
   */
  const alert = ref<IAlert>({
    success: () => undefined,
    error: () => undefined,
    info: () => undefined,
    warning: () => undefined,
    caught: () => undefined,
  });

  return {
    alert,
  };
});
