const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");
const router = express.Router();

// register - http://localhost:3000/api/auth/register
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);
// login - http://localhost:3000/api/auth/login
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);
// login - http://localhost:3000/api/auth/current
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
// login - http://localhost:3000/api/auth/logout
router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

// PATCH /api/users
router.patch(
  "/users",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrlWrapper(ctrl.subscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
