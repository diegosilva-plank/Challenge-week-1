import { AppDataSource } from "../database";
import { Repository, EntityTarget, DeepPartial } from "typeorm";

export interface ICrudRepository<T> {
  get(filter?: Partial<T>): Promise<T[]>;
  create(data: Omit<T, 'id'>): Promise<T>;
  update(id: string, data: Partial<Omit<T, "id">>): Promise<T>;
  delete(id: string): Promise<boolean>;
}

export class CrudRepository<T> implements ICrudRepository<T> {
  repository: Repository<T>;

  constructor(model: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(model);
  }

  async get(filter?: Partial<T>): Promise<T[]> {
    return this.repository.find(filter);
  }

  async create(data: Omit<T, 'id'>): Promise<T> {
    const created = this.repository.create(data as T);
    return this.repository.save(created);
  }

  async update(id: string, entity: Partial<Omit<T, "id">>): Promise<T> {
    const data = await this.repository.findOneBy({
      id,
    } as any);

    if (!data) throw new Error("Entity not found");

    const updatedData = { ...data, ...entity };
    return await this.repository.save(updatedData);
  }

  async delete(id: string): Promise<boolean> {
    const entity = await this.repository.findOneBy({ id } as any);
    if (!entity) return false;

    await this.repository.delete(id);
    return true;
  }
}
