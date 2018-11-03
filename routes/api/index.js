const router = require("express").Router();
const helloController = require("../../controllers/helloController");

router.use("/", helloController.hello);

module.exports = router;
