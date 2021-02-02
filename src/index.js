const app = require("./server");
require("./routes");

app.set("view engine", "pug");

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});
