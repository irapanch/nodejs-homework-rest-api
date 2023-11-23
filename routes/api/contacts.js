const express = require("express");

const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const schemas = require("../../schemas/contacts");
const { validateBody } = require("../../middlewares");

router.get("/", ctrlWrapper(ctrl.listContacts));
router.get("/:id", ctrlWrapper(ctrl.getById));
router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));
router.delete("/:id", ctrlWrapper(ctrl.removeById));
router.put(
  "/:id",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);
router.patch(
  "/:id/favorite",
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);
module.exports = router;
