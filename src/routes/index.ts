import { Router } from "express";
import { CrudController } from "../controllers/genericController";
import { launchRoutes } from "./launchRoutes";
import { crewManRepository, rocketRepository } from "../repositories";
import { CrudRepository } from "../repositories/genericRepository";

const createRoute = <T>(path: string, repository: CrudRepository<T>) => {
  const crudRouter = Router();

  const entityController = new CrudController(repository);

  crudRouter
    .route(`/${path}`)
    .get(entityController.get)
    .post(entityController.create);

  crudRouter
    .route(`/${path}/:id`)
    .put(entityController.update)
    .delete(entityController.delete);

  return crudRouter;
};

const router = Router();

router.use(createRoute("rocket", rocketRepository));
router.use(createRoute("crewman", crewManRepository));
router.use(createRoute("crew", crewManRepository));
router.use(launchRoutes)


export { router };
