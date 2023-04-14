import { jsonServer } from "../services/api";
interface ICrudRepository<T> {
  get(filter?: Partial<T>): Promise<T[]>;
  create(data: Omit<T, "id">): Promise<T>;
  update(id: string, data: Partial<Omit<T, "id">>): Promise<T>;
  delete(id: string): Promise<boolean>;
}

export class CrudRepository<T> implements ICrudRepository<T> {
  entityName: string;

  constructor(e: string) {
    this.entityName = e;
  }

  async get(filter?: Partial<T>): Promise<T[]> {
    try {
      const response = await jsonServer.get<T[]>(`/${this.entityName}`, {
        params: filter,
      });
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  async create(data: Omit<T, "id">): Promise<T> {
    try {
      const response = await jsonServer.post<T>(`/${this.entityName}`, data);
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  async update(id: string, entity: Partial<Omit<T, "id">>): Promise<T> {
    try {
      console.log("alo")
      const responseGet = await jsonServer.get<T[]>(`/${this.entityName}`, {
        params: { id },
      });
      const [completeEntity] = responseGet.data;
      const updated: T = { ...completeEntity, ...entity };

      const response = await jsonServer.put<T>(
        `/${this.entityName}/${id}`,
        updated
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  async delete(id: string): Promise<boolean> {
    try {
      await jsonServer.delete(`/${this.entityName}/${id}`);
      return true;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
