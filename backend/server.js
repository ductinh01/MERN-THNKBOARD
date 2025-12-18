import express from "express";

const app = express();
//an endpoint is a combibation of a URL + HTPP method that lets the client
// interact with a specific resource.

app.get("/api/notes", (req, res) => {
  res.status(200).send("you got 5 notes");
});

app.put("/api/notes", (req, res) => {
  res.status(201).json({ message: "post created successfully!" });
});

app.get("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
});

app.listen(5001, () => {
  console.log("server started on PORT: 5001");
});
