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

  const {
    post: { title, description, tag },
  } = state;

  return (
    <>
      <div className="reply-form mb-5">
        <form action="" onSubmit={handleSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  name="title"
                  type="text"
                  placeholder="Post Title*"
                  onChange={changeHandler}
                  value={title}
                />
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
                  onChange={changeHandler}
                >
                  <option value="">Select Type</option>
                  {categories.length > 0 &&
                    categories.map((cat) => (
                      <option value={cat.category}>{cat.category}</option>
                    ))}
                </Input>
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
                  multiple
                />
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
                />
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
                />
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
