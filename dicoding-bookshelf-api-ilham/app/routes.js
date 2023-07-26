const {
  createBook,
  getBooks,
  getBook,
  editBook,
  deleteBook,
} = require("./method");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: () => {
      return "Homepage";
    },
  },
  {
    method: "POST",
    path: "/books",
    handler: createBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBook,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBook,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBook,
  },
];

module.exports = routes;
