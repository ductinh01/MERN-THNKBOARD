import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();
//an endpoint is a combibation of a URL + HTPP method that lets the client
// interact with a specific resource.
app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("server started on PORT: 5001");
});
