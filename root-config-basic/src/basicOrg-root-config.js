import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: [location => location.pathname === "/"],
});

// registerApplication({
//   name: "@basicOrg/navbar",
//   app: () => System.import("@basicOrg/navbar"),
//   activeWhen: ["/navbar"]
// });

start({
  urlRerouteOnly: true,
});
