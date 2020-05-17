import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import { categories, ratings, statuses } from "../../constants/constants";
import {
  addBook,
  updateBook,
  removeBook,
} from "../../state/ducks/books/actions";
import * as Yup from "yup";
import { withRouter } from "react-router";
import classes from "./AddBookForm.module.css";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is a required field"),
  author: Yup.string().required("Author is a required field"),
  review: Yup.string().min(30, "Please enter minimum 30 characters."),
  imageUrl: Yup.string().url(), // formfeedback göster
});

const AddBookForm = (props) => {
  let initialValues = {
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    review: "",
    imageUrl: "",
    link: "",
    status: "",
  };
  if (props.isEdit && props.book) {
    // review var mi - Object.keys().indexOf("review") > - 1
    initialValues = { ...props.book };
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          if (props.isEdit) {
            props.updateBook(props.book.id, values, props.history);
          } else {
            props.addBook(values, props.history);
          }
        }}
        enableReinitialize={true}
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
            <Row>
              <Col xs={6}>
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
                  {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
                </FormGroup>
              </Col>
              <Col xs={6}>
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
                  {errors.author && (
                    <FormFeedback>{errors.author}</FormFeedback>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="link">Goodreads URL</Label>
              <Input
                type="text"
                name="link"
                id="link"
                placeholder="Goodreads link of the book"
                value={values.link}
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
            <Row>
              <Col xs={4}>
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
              </Col>
              <Col xs={4}>
                <FormGroup>
                  <Label for="rating">Rating</Label>
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
              </Col>
              <Col xs={4}>
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
              </Col>
            </Row>
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
              <Label for="review">Review</Label>
              <Input
                type="textarea"
                name="review"
                id="review"
                value={values.review}
                onChange={handleChange}
                invalid={errors.review}
              />
              <FormFeedback>{errors.review}</FormFeedback>
              <FormText>Review should be minimum 30 characters.</FormText>
            </FormGroup>

            {props.isEdit ? (
              <Row>
                <Col xs={{ size: 2, offset: 4 }}>
                  <Button className={classes.button} color="primary">
                    Save
                  </Button>
                </Col>
                <Col xs={{ size: 2 }}>
                  <Button
                    type="button"
                    className={classes.button}
                    color="danger"
                    onClick={() => {
                      props.removeBook(props.book.id, props.history);
                    }}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            ) : (
              <Button className={classes.button} color="primary">
                Add
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = {
  addBook,
  updateBook,
  removeBook,
};

export default withRouter(connect(null, mapDispatchToProps)(AddBookForm));
