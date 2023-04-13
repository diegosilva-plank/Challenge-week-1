import { Rocket } from "../model/rockets"

interface IRocketRepository {
    getRockets(filter: Partial<Rocket>): Promise<Rocket[]>
    createRocket(rocket: Omit<Rocket, 'id'>): Promise<Rocket>
    updateRocket(id: string, rocket: Partial<Omit<Rocket, 'id'>>): Promise<Rocket>
    deleteRocket(id: string): Promise<boolean> 
}

export const RocketRepository: IRocketRepository = {
    getRockets: async (filter) => {
        return []
    },
    createRocket: async (rocket) => {
        return { } as Rocket
    },
    updateRocket: async (id, rocket) => {
        return { } as Rocket
    },
    deleteRocket: async (id) => {
        return true
    }
}

