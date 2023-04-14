import { launchRepository, rocketRepository } from "../repositories";
import { CrudRepository, ICrudRepository } from "../repositories/genericRepository";

// export interface ICrudService<T> {
//   get(filter?: Partial<T>): Promise<T[]>;
//   create(data: Omit<T, "id">): Promise<T>;
//   update(id: string, data: Partial<Omit<T, "id">>): Promise<T>;
//   delete(id: string): Promise<boolean>;
// }

export class CrudService<T> {

  private repository

  constructor(repository: CrudRepository<T>) {
    this.repository = repository

  }

  async get(filter?: Partial<T>): Promise<T[]> {
    const entities = await this.repository.get(filter);
    return entities;
  }

  async delete(id: string): Promise<boolean> {
    const entity = await this.repository.delete(id);
    return entity;
  }

  async create (payload: Omit<T, "id">): Promise<T> {
    const entity = await this.repository.create(payload);
    return entity;
  }

  async update (id: string, payload: Partial<Omit<T, "id">>): Promise<T> {
    const entity = await this.repository.update(id, payload);
    return entity;
  }
}

const launchService = new CrudService(launchRepository)
launchService.create = async (payload) => {
  const { rocketId } = payload;
  const foundRocket = await rocketRepository.get({ id: rocketId });

  if (!foundRocket.length) throw new Error("Rocket not found");

  const launch = await launchRepository.create(payload);
  return launch;
}