const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/api/books")
  .get(booksController.findAll)
  .post(booksController.create);

router
  .route("api/books/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

router
    .route("*")
    .get(booksController.findAll)
    

module.exports = router;
