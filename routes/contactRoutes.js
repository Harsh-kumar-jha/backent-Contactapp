const express = require("express");
const {
  getAllContacts,
  createContacts,
  getASingleContact,
  updateContacts,
  deleteContacts,
} = require("../controllers/contactControllers");
const validateToken = require("../middlewares/validateTokenHandler");

const router = express.Router();

router.use(validateToken);
router.route("/").get(getAllContacts).post(createContacts);

router
  .route("/:id")
  .get(getASingleContact)
  .put(updateContacts)
  .delete(deleteContacts);

module.exports = router;
