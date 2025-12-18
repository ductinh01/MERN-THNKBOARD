import express from "express";
import {
  getAllNotes,
  createNotes,
  updateNotes,
  deleteNotes,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.put("/", createNotes);
router.get("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;
