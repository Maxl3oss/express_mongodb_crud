const express = require("express");
const router = express.Router();
const bookController = require("../controller/anime.controller");

router.post("/", bookController.createAnime);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post("/:id", bookController.updateAnime);
router.delete("/", bookController.deleteAnime);
// .get(async (req, res) => {
//     return await bookService.getAllBooks(req, res);
// })
module.exports = router;