const express = require("express");

const router = express.Router();

// TodoRoute
const { getTodos, addTodo } = require("../controllers/versi1/Todos");

router.get("/todos", getTodos);
// router.get("/artists-music", getArtistsHasManyMusic);
// router.get("/artist/:idParam", getArtistById);
router.post("/add-todo", addTodo);
// router.patch("/update-artist/:idParam", updateArtist);
// router.delete("/delete-artist/:idParam", deleteArtist);
// EndTodoRoute

module.exports = router;
