import { launchRepository, rocketRepository } from "../repositories";
import { ICrudService } from "./genericService";

export const launchService = {
  async get(filter) {
    const launches = await launchRepository.get(filter);
    return launches;
  },
  async create(payload) {
    const { rocketId } = payload;
    const foundRocket = await rocketRepository.get({ id: rocketId });

    if (!foundRocket.length) throw new Error("Rocket not found");

    const launch = await launchRepository.create(payload);
    return launch;
  },
  async update(id, payload) {
    const { rocketId } = payload;
    const foundRocket = await rocketRepository.get({ id: rocketId });

    if (!foundRocket.length) throw new Error("Rocket not found");

    const launch = await launchRepository.update(id, payload);
    return launch;
  },
  async delete(id) {
    const launch = await launchRepository.delete(id);
    return launch;

  },
} satisfies ICrudService<Launch>;
