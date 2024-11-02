import express from "express";
import postController from "../backend/controllers/postController.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/posts", postController.list); // Retrieve a list of posts
app.post("/posts", postController.create); // Create a new post
app.get("/posts/:id", postController.retrieve); // Retrieve a single post according to id
app.put("/posts/:id", postController.update); // Update a post according to id
app.delete("/posts/:id", postController.delete); // Delete a post according to id

app.listen(port, () => {
  console.log(
    `Blog application listening on port ${port}. Visit http://localhost:${port}.`
  );
});
