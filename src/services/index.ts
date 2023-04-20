import { Crew } from "../models/crew";
import { CrewMan } from "../models/crewMan";
import { Rocket } from "../models/rocket";
import * as repositories from "../repositories";
import { CrudService } from "./genericService";
import { LaunchService } from "./launchServices";


export const rocketService = new CrudService<Rocket>(repositories.rocketRepository);
export const launchService = new LaunchService(repositories.launchRepository);
export const crewService= new CrudService<Crew>(repositories.crewRepository);
export const crewManService = new CrudService<CrewMan>(repositories.crewManRepository);