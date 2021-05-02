import React from "react";
import { Input, Button, Col, Row, FormGroup, Form } from "reactstrap";

function CommentForm({ changeHander, commentSubmit }) {
  return (
    <>
      <div className="reply-form">
        <h4>Leave a Reply</h4>
        <p>
          Your email address will not be published. Required fields are marked *{" "}
        </p>
        <Form onSubmit={commentSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  onChange={changeHander}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email*"
                  onChange={changeHander}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="website"
                  placeholder="Your Website"
                  onChange={changeHander}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="textarea"
                  name="comment"
                  placeholder="Your Comment*"
                  onChange={changeHander}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit" className="btn btn-primary">
            Post Comment
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CommentForm;
