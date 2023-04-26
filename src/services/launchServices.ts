import { Launch } from "../models/launch";
import { launchRepository, rocketRepository } from "../repositories";
import { CrudService } from "./genericService";

export class LaunchService extends CrudService<Launch> {
  async create(payload: Omit<Launch, "id">): Promise<Launch> {
    const { id: rocketId } = payload.rocket;
    const foundRocket = await rocketRepository.get({ id: rocketId });

    if (!foundRocket.length) throw new Error("Rocket not found");

    const launch = await launchRepository.create(payload);
    return launch;
  }

  async update(
    id: string,
    payload: Partial<Omit<Launch, "id">>
  ): Promise<Launch> {
    const { id: rocketId } = payload.rocket;
    const foundRocket = await rocketRepository.get({ id: rocketId });

    if (!foundRocket.length) throw new Error("Rocket not found");

    const launch = await launchRepository.update(id, payload);
    return launch;
  }

  async get(): Promise<Launch[]> {
    const launches = await launchRepository.get({
      relations: ["rocket"],
    } as any);
    return launches;
  }
}
