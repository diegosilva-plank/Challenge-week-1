import { Router } from "express";
import { CrudController } from "../controllers/genericController";
import {
  createLaunchValidator,
  updateLaunchValidator,
} from "../validators/launchValidator";
import { LaunchRepository } from "../repositories";

const launchRoutes = Router();
const launchController = new CrudController<Launch>(LaunchRepository);

launchRoutes
  .route("/launch")
  .get(launchController.get)
  .post(createLaunchValidator, launchController.create);

launchRoutes
  .route("/launch/:id")
  .put(updateLaunchValidator, launchController.update)
  .delete(launchController.delete);

export { launchRoutes };