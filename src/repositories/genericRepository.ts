import { jsonServer } from "../services/api";

export class Repository<T> {
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
  async create(entity: T): Promise<T> {
    try {
      const response = await jsonServer.post<T>(`/${this.entityName}`, entity);
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  async update<T>(id: string, entity: Partial<Omit<T, "id">>): Promise<T> {
    try {
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

// Promise<T[]>

// interface IRepository<T> {
//     get<T>(filter?: Partial<T>): Promise<T[]>
//     create<T>(data : T): Promise<T>
//     update<T>(id: string, data : Partial<Omit<T, 'id'>>): Promise<T>
//     delete<T>(id: string): Promise<boolean>
// }

// type Repository<T> = {
//     id: number
//     name: string
// }

// export const Repository: IRepository<T> = {
//     get<T>: async (filter) => {
//         try {
//             const response = await jsonServer.get<Rocket[]>('/rocket', { params: filter })
//             return response.data
//         } catch (err) {
//             console.error(err)
//             throw err
//         }
//     },
// createRocket: async (rocket) => {
//     try {
//         const response = await jsonServer.post<Rocket>('/rocket', rocket)
//         return response.data
//     } catch (err) {
//         console.error(err)
//         throw err
//     }
// },
// updateRocket: async (id, rocket) => {
//     try {
//         const [ rocketComplete ] = await RocketRepository.getRockets({ id })
//         const updatedRocket: Rocket = {...rocketComplete, ...rocket}
//         const response = await jsonServer.put<Rocket>(`/rocket/${id}`, updatedRocket)
//         return response.data
//     } catch (err) {
//         console.error(err)
//         throw err
//     }
// },
//     deleteRocket: async (id) => {
//         try {
//             await jsonServer.delete(`/rocket/${id}`)
//             return true
//         } catch (err) {
//             console.error(err)
//             throw err
//         }
//     }
// }
