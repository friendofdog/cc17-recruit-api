const app = require("../server");
const routeCompanies = require("./companies");
const routeRecruiters = require("./recruiters");

const index = app.get("/", async (_, res) => {
  const routeList = [];
  app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
      const methods = Object.keys(r.route.methods);
      routeObj = {
        text: methods.join(", ").toUpperCase() + ": " + r.route.path,
        link: r.route.path
      }
      routeList.push(routeObj);
    }
  });

  res.render("index", {
    title: "Recruit API",
    header: "Recruit API",
    gitMessage: "View this project on Github:",
    gitLink: "https://github.com/friendofdog/cc17-recruit-api",
    routeText: "List of routes:",
    routeList: routeList
  });
});

module.exports = [
  index,
  routeCompanies,
  routeRecruiters
];
