import { CrewMan } from "../models/crewMan";
import { CrudService } from "./genericService";

export class CrewManService extends CrudService<CrewMan> {
  async get(): Promise<CrewMan[]> {
    return await this.repository.get({
      relations: ["crews"],
    } as any);
  }
}
