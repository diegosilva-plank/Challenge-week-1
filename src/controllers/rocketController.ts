import { Request, Response } from "express";
import { RocketRepository } from "../repositories/rocketRepository";

const getRockets = async (req: Request, res: Response) => {
    const rockets = await RocketRepository.getRockets({})
    res.json(rockets)
}

const createRocket = async (req: Request, res: Response) => {
    const rocket = await RocketRepository.createRocket(req.body)
    res.json(rocket)
}

const updateRocket = async (req: Request, res: Response) => {
    const { id } = req.params
    const rocket = await RocketRepository.updateRocket(id, req.body)
    res.json(rocket)
}

const deleteRocket = async (req: Request, res: Response) => {
    const { id } = req.params
    const success = await RocketRepository.deleteRocket(id)
    res.json(success)
}