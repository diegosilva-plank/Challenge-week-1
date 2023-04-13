import { Rocket, getRockets } from "../model/rockets"
import { jsonServer } from "../services/api"


interface IRocketRepository {
    getRockets(filter?: Partial<Rocket>): Promise<Rocket[]>
    createRocket(rocket: Rocket): Promise<Rocket>
    updateRocket(id: string, rocket: Partial<Omit<Rocket, 'id'>>): Promise<Rocket>
    deleteRocket(id: string): Promise<boolean> 
}

export const RocketRepository: IRocketRepository = {
    getRockets: async (filter) => {
        try {
            const response = await jsonServer.get<Rocket[]>('/rocket', { params: filter })
            return response.data
        } catch (err) {
            console.error(err)
            throw err
        }
    },
    createRocket: async (rocket) => {
        try {
            const response = await jsonServer.post<Rocket>('/rocket', rocket)
            return response.data
        } catch (err) {
            console.error(err)
            throw err
        }
    },
    updateRocket: async (id, rocket) => {
        try {
            const [ rocketComplete ] = await RocketRepository.getRockets({ id })
            const updatedRocket: Rocket = {...rocketComplete, ...rocket}
            const response = await jsonServer.put<Rocket>(`/rocket/${id}`, updatedRocket)
            return response.data
        } catch (err) {
            console.error(err)
            throw err
        }
    },
    deleteRocket: async (id) => {
        try {
            await jsonServer.delete(`/rocket/${id}`)
            return true
        } catch (err) {
            console.error(err)
            throw err
        }
    }
}

