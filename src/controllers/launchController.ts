import { launchRepository } from "../repositories";
import { launchService } from "../services/launchServices";
import { Controller } from "./types";


export const launchController = {
  async get(req, res) {
    try {
      const entities = await launchRepository.get();
      res.json(entities);
    } catch (err) {
      console.error(err);

      res
        .status(500)
        .json({ message: "Error while getting entities from database" });
    }
  },

  async create(req, res) {
    try {
      const entity = await launchService.create(req.body);
      res.json(entity);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error while storing entity in database" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const entity = await launchRepository.update(id, req.body);
      res.json(entity);
    } catch (err) {
      console.error(err);

      res
        .status(500)
        .json({ message: "Error while updating entity in database" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const success = await launchRepository.delete(id);
      res.json(success);
    } catch (err: any) {
      if (err?.response?.status === 404) {
        res.status(404).json({ message: "No object with passed id" });
      } else {
        console.error(err);

        res
          .status(500)
          .json({ message: "Error while deleting entity from database" });
      }
    }
  },
} satisfies Controller