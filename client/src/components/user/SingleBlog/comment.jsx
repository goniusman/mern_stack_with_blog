import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoadComment } from "../../../store/actions/blogAction";
import CommentForm from "./commentForm";

const Comment = ({ comments, changeHander, commentSubmit, auth, state }) => {
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
          {comments && comments.length} Comments{" "}
        </h4>

        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment} id={comment} className="comment">
              <div className="d-flex">
                <div className="comment-img">
                  <img src="../uploads/default-author.jpg" alt="" />
                </div>
                <div>
                  <h5>
                    <Link to="/">{comment.name}</Link>{" "}
                    <Link to="/" className="reply">
                      <i className="bi bi-reply-fill"></i> Reply
                    </Link>
                  </h5>
                  <time>
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </time>
                  <p>{comment.comment}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Comment Not Found</p>
        )}

        <CommentForm
          changeHander={changeHander}
          commentSubmit={commentSubmit}
          auth={auth}
          state={state}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.blog.comments,
  user: state.auth.user,
  auth: state.auth,
});

export default connect(mapStateToProps, { LoadComment })(Comment);
