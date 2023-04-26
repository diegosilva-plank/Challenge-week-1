import { CrudRepository } from "../repositories/genericRepository";

export class CrudService<T> {
  protected repository: CrudRepository<T>;

  constructor(repository: CrudRepository<T>) {
    this.repository = repository;
  }

  async get(filter?: Partial<T>): Promise<T[]> {
    const entities = await this.repository.get(filter);
    return entities;
  }

  async delete(id: string): Promise<boolean> {
    const entity = await this.repository.delete(id);
    return entity;
  }

  async create(payload: Omit<T, "id">): Promise<T> {
    const entity = await this.repository.create(payload);
    return entity;
  }

  async update(id: string, payload: Partial<Omit<T, "id">>): Promise<T> {
    const entity = await this.repository.update(id, payload);
    return entity;
  }
}
