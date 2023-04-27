import { Rocket } from "../models/rocket";
import * as repositories from "../repositories";
import { CrewManService } from "./crewmanService";
import { CrewService } from "./crewServices";
import { CrudService } from "./genericService";
import { LaunchService } from "./launchServices";

export const rocketService = new CrudService<Rocket>(
  repositories.rocketRepository
);
export const launchService = new LaunchService(repositories.launchRepository);
export const crewService = new CrewService(repositories.crewRepository);
export const crewManService = new CrewManService(
  repositories.crewManRepository
);
