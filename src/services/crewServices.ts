import { Crew } from "../models/crew";
import { CrudService } from "./genericService";

export class CrewService extends CrudService<Crew> {
  async get(): Promise<Crew[]> {
    return await this.repository.get({
      relations: ["crewMans"],
    } as any);
  }
}
