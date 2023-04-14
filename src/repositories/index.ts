import { CrudRepository } from "./genericRepository";

export const rocketRepository = new CrudRepository<Rocket>('rocket');
export const LaunchRepository = new CrudRepository<Launch>('launch');
export const crewRepository = new CrudRepository<Crew>('crew');
export const crewManRepository = new CrudRepository<CrewMan>('crewman');
export const crewManCrewRepository = new CrudRepository<CrewMan_Crew>('crewman_crew');