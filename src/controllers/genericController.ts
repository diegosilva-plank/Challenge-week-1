import { Request, Response } from "express";
import { CrudRepository } from "../repositories/genericRepository";

export class CrudController<T> {
    private repository: CrudRepository<T>

    constructor(entityName: string) {
        this.repository = new CrudRepository<T>(entityName)
    }

    get = async (req: Request, res: Response) => {
        try {
            const entities = await this.repository.get()
            res.json(entities)
        } catch (err) {
            res.status(500).json({ message: 'Error while getting entities from database' })
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const entity = await this.repository.create(req.body)
            res.json(entity)
        } catch (err) {
            res.status(500).json({ message: 'Error while storing entity in database' })
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const entity = await this.repository.update(id, req.body)
            res.json(entity)
        } catch (err) {
            res.status(500).json({ message: 'Error while updating entity in database' })
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const success = await this.repository.delete(id)
            res.json(success)
        } catch (err: any) {
            if (err?.response?.status === 404) {
                res.status(404).json({ message: 'No object with passed id' })
            } else {
                res.status(500).json({ message: 'Error while deleting entity from database' })
            }
        }
    }
}