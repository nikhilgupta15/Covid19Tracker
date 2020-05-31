express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const countryRouter = require("./routes/country");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use("/", indexRouter);
app.use("/country", countryRouter);

app.listen(3000);
