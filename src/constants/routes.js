import { Homepage, AddBook } from "../containers";

const routes = [
  {
    title: "Home Page",
    path: "/",
    exact: true,
    componentProps: {},
    component: Homepage,
  },
  {
    title: "Add Book",
    path: "/add-book",
    exact: false,
    componentProps: {},
    component: AddBook,
  },
  {
    title: "Edit Book",
    path: "/edit-book/:id",
    exact: false,
    componentProps: {
      isEdit: true,
    },
    component: AddBook,
  },
  {
    title: "Read Books",
    path: "/read-books",
    exact: false,
    componentProps: {
      isReadBooks: true,
    },
    component: Homepage,
  },
];

export default routes;
