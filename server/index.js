const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const authRouter = require("./routers/auth");
const favoritesRouter = require("./routers/favorites");
const { logger } = require("./middleware");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json());
app.use(logger);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/favorites", favoritesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to todds server!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
