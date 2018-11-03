const express = require("express");
const routes = require("./routes");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(express.static("../client/public"));

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
