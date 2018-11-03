const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(
        express.static(path.join(__dirname, "client", "build", "index.html"))
    );
} else {
    app.use(express.static(path.join(__dirname, "client", "public")));
}

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
