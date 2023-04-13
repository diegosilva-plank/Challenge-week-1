import { Request, Response } from "express";
import { RocketRepository } from "../repositories/rocketRepository";

export const getRockets = async (req: Request, res: Response) => {
    try {
        const rockets = await RocketRepository.getRockets()
        res.json(rockets)
    } catch (err) {
        res.status(500).json({ message: 'Failed accessing database' })
    }
}

export const createRocket = async (req: Request, res: Response) => {
    try {
        const rocket = await RocketRepository.createRocket(req.body)
        res.json(rocket)
    } catch (err) {
        res.status(500).json({ message: 'Failed accessing database' })
    }
}

export const updateRocket = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const rocket = await RocketRepository.updateRocket(id, req.body)
        res.json(rocket)
    } catch (err) {
        res.status(500).json({ message: 'Failed accessing database' })
    }
}

export const deleteRocket = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const success = await RocketRepository.deleteRocket(id)
        res.json(success)
    } catch (err: any) {
        if (err?.response?.status === 404) {
            res.status(404).json({ message: 'No object with passed id' })
        } else {
            res.status(500).json({ message: 'Failed accessing database' })
        }
    }
}