import { Request, Response } from "express";
import { Repository } from "../repositories/genericRepository";

export class Controller<T> {
    
    entityName: string

    constructor(e: string) {
        this.entityName = e
    }

    get = async (req: Request, res: Response) => {
        try {
            const repository = new Repository(this.entityName)
            const entities = await repository.get()
            res.json(entities)
        } catch (err) {
            res.status(500).json({ message: 'Failed accessing database' })
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const repository = new Repository(this.entityName)
            const entity = await repository.create(req.body)
            res.json(entity)
        } catch (err) {
            res.status(500).json({ message: 'Failed accessing database' })
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const repository = new Repository(this.entityName)
            const { id } = req.params
            const entity = await repository.update(id, req.body)
            res.json(entity)
        } catch (err) {
            res.status(500).json({ message: 'Failed accessing database' })
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            const repository = new Repository(this.entityName)
            const { id } = req.params
            const success = await repository.delete(id)
            res.json(success)
        } catch (err: any) {
            if (err?.response?.status === 404) {
                res.status(404).json({ message: 'No object with passed id' })
            } else {
                res.status(500).json({ message: 'Failed accessing database' })
            }
        }
    }
}

// export const getRockets = async (req: Request, res: Response) => {
//     try {
//         const repository = new Repository('rocket')
//         const rockets = await repository.get()
//         res.json(rockets)
//     } catch (err) {
//         res.status(500).json({ message: 'Failed accessing database' })
//     }
// }

// export const createRocket = async (req: Request, res: Response) => {
//     try {
//         const repository = new Repository('rocket')
//         const rocket = await repository.create(req.body)
//         res.json(rocket)
//     } catch (err) {
//         res.status(500).json({ message: 'Failed accessing database' })
//     }
// }

// export const updateRocket = async (req: Request, res: Response) => {
//     try {
//         const repository = new Repository('rocket')
//         const { id } = req.params
//         const rocket = await repository.update(id, req.body)
//         res.json(rocket)
//     } catch (err) {
//         res.status(500).json({ message: 'Failed accessing database' })
//     }
// }

// export const deleteRocket = async (req: Request, res: Response) => {
//     try {
//         const repository = new Repository('rocket')
//         const { id } = req.params
//         const success = await repository.delete(id)
//         res.json(success)
//     } catch (err: any) {
//         if (err?.response?.status === 404) {
//             res.status(404).json({ message: 'No object with passed id' })
//         } else {
//             res.status(500).json({ message: 'Failed accessing database' })
//         }
//     }
// }