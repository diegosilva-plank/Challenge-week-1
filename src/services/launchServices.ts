import { LaunchRepository, rocketRepository } from "../repositories";

export const createLaunch = async (payload: Omit<Launch, "id">) => {
  const { rocketId } = payload;
  const foundRocket = await rocketRepository.get({ id: rocketId });

  if (!foundRocket.length) throw new Error("Rocket not found");

  const launch = await LaunchRepository.create(payload);
  return launch;
};
