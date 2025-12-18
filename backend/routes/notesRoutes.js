import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("you got 5 notes");
});

router.put("/", (req, res) => {
  res.status(201).json({ message: "post created successfully!" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
});

export default router;
