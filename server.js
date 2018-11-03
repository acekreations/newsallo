const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/hello", function(req, res) {
    res.send("hello there");
});

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
