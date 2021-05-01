import React from "react";
import { Input, Button, Col, Row, FormGroup, TextArea } from "reactstrap";

function CommentForm() {
  return (
    <>
      <div className="reply-form">
        <h4>Leave a Reply</h4>
        <p>
          Your email address will not be published. Required fields are marked *{" "}
        </p>
        <form action="">
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  onChange={}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input type="text" name="email" placeholder="Your Email*" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input type="text" name="website" placeholder="Your Website" />
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
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit" className="btn btn-primary">
            Post Comment
          </Button>
        </form>
      </div>
    </>
  );
}

export default CommentForm;
