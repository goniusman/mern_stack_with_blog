import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoadComment } from "../../../store/actions/blogAction";
import CommentForm from "./commentForm";

const Comment = ({  comments, changeHander, commentSubmit }) => {
  // const [commentss, setCommentss] = useState([]);
  // const [test, setTest] = useState("helos");
  // // this sis another fucntion asyn fuction
  // async function getData() {
  //   let params = data._id;
  //   await fetch(`/api/post/single-post/${params}`)
  //     .then((response) => response.json())
  //     .then((commentss) => setCommentss(commentss));
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  // useEffect(() => {
  //     console.log('initialized')
  // }, [])

  return (
    <div>
      <div className="blog-comments">
        <h4 className="comments-count">
          {comments && comments.length} Comments
        </h4>
        {comments.length &&
          comments.map((comment) => (
            <div key={comment} id={comment} className="comment">
              <div className="d-flex">
                <div className="comment-img">
                  <img src="../assets/img/blog/comments-1.jpg" alt="" />
                </div>
                <div>
                  <h5>
                    <Link to="/">{comment.name}</Link>{" "}
                    <Link to="/" className="reply">
                      <i className="bi bi-reply-fill"></i> Reply
                    </Link>
                  </h5>
                  <time>{comment.createdAt}</time>
                  <p>{comment.comment}</p>
                </div>
              </div>
            </div>
          ))}

        <CommentForm
          changeHander={changeHander}
          commentSubmit={commentSubmit}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.blog.comments,
  user: state.auth.user,
});

export default connect(mapStateToProps, { LoadComment })(Comment);
