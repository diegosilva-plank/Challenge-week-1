import { launchRepository, rocketRepository } from "../repositories";

export const launchService = {
  async create(payload: Omit<Launch, "id">) {
    const { rocketId } = payload;
    const foundRocket = await rocketRepository.get({ id: rocketId });

    if (!foundRocket.length) throw new Error("Rocket not found");

    const launch = await launchRepository.create(payload);
    return launch;
  },
};
