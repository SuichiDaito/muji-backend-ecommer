require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRouter = require("./routes/web");

//config template
configViewEngine(app);

//declare router
app.use("/", webRouter);

app.listen(port, hostname, () => {
  console.log(`Server running with the port: ${port}`);
});
