import { defineStore } from "pinia";
import DrinksService from "@/services/DrinksService";

import type { IDrink } from "@/types/drink";

export const useDrinksStore = defineStore("DrinksStore", () => {
  const isLoading = ref<boolean>(false);

  const data = ref<IDrink[]>([]);

  const fetch = async (payload: string) => {
    isLoading.value = true;

    try {
      const { drinks } = await DrinksService.fetch(payload);
      data.value = drinks;
    } catch (error) {
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    data,

    fetch,
  };
});
