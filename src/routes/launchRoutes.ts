import { Router } from "express";
import { launchController } from "../controllers/launchController";
import {
  createLaunchValidator,
  updateLaunchValidator,
} from "../validators/launchValidator";

const launchRoutes = Router();

launchRoutes
  .route("/launch")
  .get(launchController.get)
  .post(createLaunchValidator, launchController.create);

launchRoutes
  .route("/launch/:id")
  .put(updateLaunchValidator, launchController.update)
  .delete(launchController.delete);

export { launchRoutes };
