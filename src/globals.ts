export const initGlobalData = (app: any) => {
  app.provide("DRINKS_MENU", [
    { title: "Margarita", value: "margarita" },
    { title: "Mojito", value: "mojito" },
    { title: "A1", value: "a1" },
    { title: "Kir", value: "kir" },
  ] as IDrinksMenu[]);

  return app;
};

declare global {
  interface IDrinksMenu {
    title: string;
    value: string;
  }
}
