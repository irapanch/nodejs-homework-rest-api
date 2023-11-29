const express = require("express");

const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const schemas = require("../../schemas/contacts");
const { validateBody, authenticate } = require("../../middlewares");

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));
router.get("/:id", authenticate, ctrlWrapper(ctrl.getById));
router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.add)
);
router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeById));
router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);
router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);
module.exports = router;
