import React from "react";
import { Formik } from "formik";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import { categories, ratings, statuses } from "../../constants/constants";

const AddBookForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          author: "",
          category: "",
          description: "",
          rating: "",
          imageUrl: "",
          status: "",
        }}
        onSubmit={(values) => {
          console.log(values);
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
              />
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
              />
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
            <Button color="primary">Add Book</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBookForm;
