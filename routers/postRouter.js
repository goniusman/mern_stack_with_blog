const router = require("express").Router();
const authenticate = require("../authenticate");
const {
  create,
  getAll,
  getSinglePost,
  update,
  remove,
  toogleUpdate,
} = require("../controllers/postController");

// for authenticate user
// const authenticate = require('../authenticate')

router.get("/", getAll);

router.get("/:id", getSinglePost);

router.post("/", create);

// router.post('/upload/:id', imageUpload)

router.put("/:id", update);
router.put("/toggle/:id", toogleUpdate);

// router.put('/issuetoggle/:id', updateSolved)
router.delete("/:id", remove);

module.exports = router;
