import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Input, Col, Row, FormGroup } from "reactstrap";
import { loadCategory } from "../../../store/actions/blogAction";

function PostForm({
  name,
  changeHandler,
  handleSubmit,
  imageHandler,
  state,
  categories,
}) {
  // const [categories, setCategories] = useState([]);

  // async function getData() {
  //   await fetch(`/api/category`)
  //     .then((response) => response.json())
  //     .then((categories) => setCategories(categories));
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  const { title, description, tag, category, postId, error } = state;

  return (
    <>
      <div className="reply-form mb-5">
        <form action="" onSubmit={handleSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <Input type="hidden" id={postId} />
                <Input
                  name="title"
                  type="text"
                  placeholder="Post Title*"
                  onChange={changeHandler}
                  value={title}
                  className={
                    error.title ? "form-control is-invalid" : "form-control"
                  }
                />
                {error.title && (
                  <div className="invalid-feedback">{error.title}</div>
                )}
              </FormGroup>
              <Input
                name="author"
                type="hidden"
                value={name}
                onChange={changeHandler}
              />
              <FormGroup>
                <Input
                  type="select"
                  name="category"
                  id="category"
                  value={category}
                  onChange={changeHandler}
                  className={
                    error.description
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                >
                  <option value="">Select Type</option>
                  {categories.length > 0 &&
                    categories.map((cat) => (
                      <option key={cat._id} value={cat.category}>
                        {cat.category}
                      </option>
                    ))}
                </Input>
                {error.category && (
                  <div className="invalid-feedback">{error.category}</div>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  name="file"
                  type="file"
                  onChange={imageHandler}
                  className={
                    error.description
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {error.file && (
                  <div className="invalid-feedback">{error.file}</div>
                )}
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Input
                  name="description"
                  type="textarea"
                  placeholder="Description"
                  onChange={changeHandler}
                  value={description}
                  className={
                    error.description
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {error.title && (
                  <div className="invalid-feedback">{error.title}</div>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  name="tag"
                  type="text"
                  placeholder="all tags"
                  onChange={changeHandler}
                  value={tag}
                  className={
                    error.description
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {error.tag && (
                  <div className="invalid-feedback">{error.tag}</div>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit">Create Post</Button>
        </form>
      </div>
    </>
  );
}

// const mamStateToProps = (state) => ({
//   posts: state.blog,
// });
// export default connect(mamStateToProps, { loadCategory })(PostForm);
export default PostForm;
