import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: [location => location.pathname === "/"],
});

registerApplication({
  name: "angular10-routing",
  app: () => System.import("angular10-routing"),
  activeWhen: ["/angular10-routing"]
});

start({
  urlRerouteOnly: true,
});
