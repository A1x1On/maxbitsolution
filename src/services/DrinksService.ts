import type { ICocktail } from "@/types/drink";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/";

class DrinksService {
  static async fetch(payload: string): Promise<ICocktail> {
    return fetch(`${BASE_URL}1/search.php?s=${payload}`)
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  }
}

export default DrinksService;
