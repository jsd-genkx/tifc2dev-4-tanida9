const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

let posts = [];


app.post("/posts", (req, res) => {
  const {title, content} = req.body;
  const newPost = {
    id: posts.length + 1,
    title: title,
    content: content,
  };
  posts.push(newPost);
  res.status(200).json(newPost);
});

app.listen(port, () => {
  console.log('Server running at http://localhost:3000');
});
