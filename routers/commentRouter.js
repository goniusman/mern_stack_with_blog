const router = require("express").Router();
const { create, getAll, remove } = require("../controllers/commentController");
// const authenticate = require('../authenticket')

router.post("/", create);

router.get("/:id", getAll);

router.delete("/:id", remove);

module.exports = router;
