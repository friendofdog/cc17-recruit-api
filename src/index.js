const app = require("./server");
require("./routes");

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});
