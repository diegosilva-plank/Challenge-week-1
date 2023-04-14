import { Router } from "express";
import { CrudController } from "../controllers/genericController";

const createRoute = (entityName: string) => {
  const crudRouter = Router();

  const entityController = new CrudController(entityName);

  crudRouter
    .route(`/${entityName}`)
    .get(entityController.get)
    .post(entityController.create);

  crudRouter
    .route(`/${entityName}/:id`)
    .put(entityController.update)
    .delete(entityController.delete);

  return crudRouter;
};

const router = Router();

for (const entityName of ["rocket", "launch", "crewman", "crew"]) {
  router.use(createRoute(entityName));
}

export { router };
