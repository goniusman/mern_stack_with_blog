import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SingleloadBlog,
  createComment,
  LoadComment,
} from "../../../store/actions/blogAction";
import Breadcrumbs from "../breadcrumbs";
import Sidebar from "../sidebar";
import Article from "./article";
import Author from "./author";
import Comment from "./comment";

class SingleBlog extends Component {
  state = {
    id: this.props.match.params.postId,
    name: this.props.user.name,
    email: this.props.user.email,
    website: "",
    comments: "",
  };

  commentChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  commentSubmit = (e) => {
    e.preventDefault();
    const { id, name, email, website, comment } = this.state;
    this.props.createComment({ id, name, email, website, comment });
  };

  componentDidMount() {
    const params = this.props.match.params.postId;
    // const urls = `/api/post/${params}`

    this.props.SingleloadBlog(params);

    this.props.LoadComment(params);
  }

  render() {
    const { data } = this.props;
    //    console.log(this.props);
    return (
      <>
        <Breadcrumbs title={data.title} />

        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8 entries">
                <Article data={data} />

                <Author data={data} />

                <Comment
                  changeHander={this.commentChangeHandler}
                  commentSubmit={this.commentSubmit}
                  comments={this.props.comments}
                />
              </div>

              <Sidebar />
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.blog.singleBlog,
  user: state.auth.user,
});
export default connect(mapStateToProps, {
  SingleloadBlog,
  createComment,
  LoadComment,
})(SingleBlog);
