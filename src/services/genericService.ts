import { ICrudRepository } from "../repositories/genericRepository";

export interface ICrudService<T> {
  get(filter?: Partial<T>): Promise<T[]>;
  create(data: Omit<T, "id">): Promise<T>;
  update(id: string, data: Partial<Omit<T, "id">>): Promise<T>;
  delete(id: string): Promise<boolean>;
}

export const CrudService = <T>(repository: ICrudRepository<T>): ICrudService<T> => {
  return {
    async get(filter) {
      const entities = await repository.get(filter);
      return entities;
    },
    async create(payload) {
      const entity = await repository.create(payload);
      return entity;
    },
    async update(id, payload) {
      const entity = await repository.update(id, payload);
      return entity;
    },
    async delete(id) {
      const entity = await repository.delete(id);
      return entity;
    },
  };
}
