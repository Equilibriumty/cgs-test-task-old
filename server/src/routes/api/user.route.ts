import { Router } from "express";
import userController from "../../controllers/user.controller";
import schemaValidationMiddleware from "../../middlewares/validation.middleware";
import { validUserScheme } from "../../types/user.type";

const router: Router = Router();

router.post(
  '/register',
  schemaValidationMiddleware(validUserScheme),
  userController.userRegistration.bind(userController)
);
router.post(
  '/login',
  schemaValidationMiddleware(validUserScheme),
  userController.userLogin.bind(userController)
);


export default router;
