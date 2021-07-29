const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/users", usersController.addUsers);

module.exports = router;