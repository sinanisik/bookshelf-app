import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router";
import { categories, ratings, statuses } from "../../constants";
import { addBook } from "../../state/ducks/books/actions";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is a required field."),
  author: Yup.string().required("Author is a required field."),
});

const AddBookForm = (props) => {
  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        category: "",
        description: "",
        rating: "",
        imageUrl: "",
        status: "Not read",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        props.addBook(values, props.history);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Name of the book"
              value={values.title}
              onChange={handleChange}
              invalid={errors.title}
            />
            <FormFeedback>{errors.title}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input
              type="text"
              name="author"
              id="author"
              placeholder="Author of the book"
              value={values.author}
              onChange={handleChange}
              invalid={errors.author}
            />
            <FormFeedback>{errors.author}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Category</Label>
            <Input
              type="select"
              name="category"
              id="category"
              value={values.category}
              onChange={handleChange}
            >
              {categories.map((category) => {
                return <option>{category}</option>;
              })}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Rating</Label>
            <Input
              type="select"
              name="rating"
              id="rating"
              value={values.rating}
              onChange={handleChange}
            >
              {ratings.map((score) => {
                return <option>{score}</option>;
              })}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="imageUrl">Image URL</Label>
            <Input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="Image of the book"
              value={values.imageUrl}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Status</Label>
            <Input
              type="select"
              name="status"
              id="status"
              value={values.status}
              onChange={handleChange}
            >
              {statuses.map((status) => {
                return <option>{status}</option>;
              })}
            </Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = {
  addBook,
};

export default withRouter(connect(null, mapDispatchToProps)(AddBookForm));
