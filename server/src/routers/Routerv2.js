const express = require("express");

const router = express.Router();

// TodosRouter
const { getTodos } = require("../controllers/versi2/Todos");

router.get("/todos", getTodos);
// EndTodosRouter

module.exports = router;
