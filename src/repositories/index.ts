import { Crew } from "../models/crew";
import { CrewMan } from "../models/crewMan";
import { Launch } from "../models/launch";
import { Rocket } from "../models/rocket";
import { CrudRepository } from "./genericRepository";

export const rocketRepository = new CrudRepository(Rocket);
export const launchRepository = new CrudRepository(Launch);
export const crewRepository = new CrudRepository(Crew);
export const crewManRepository = new CrudRepository(CrewMan);
