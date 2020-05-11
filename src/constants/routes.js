import { Homepage, AddBook, ReadBooks } from "../containers";

const routes = [
  {
    title: "Home Page",
    path: "/",
    exact: true,
    component: Homepage,
  },
  {
    title: "Read Books",
    path: "/read-books",
    exact: false,
    component: ReadBooks,
  },
  {
    title: "Add Book",
    path: "/add-book",
    exact: false,
    component: AddBook,
  },
];

export default routes;
