import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SingleloadBlog,
  createComment,
  LoadComment,
} from "../../../store/actions/blogAction";
import Header from "../header";
import Footer from "../footer";
import Breadcrumbs from "../breadcrumbs";
import Sidebar from "../sidebar";
import Article from "./article";
import Author from "./author";
import Comment from "./comment";

const stylefornotfount = {
  paddingTop: "2rem",
  paddingBottom: "2rem",
  textalign: "center",
  color: "red",
};
class SingleBlog extends Component {
  state = {
    id: this.props.match.params.postId,
    name: this.props.user.name,
    email: this.props.user.email,
    website: "",
    comment: "",
    error: {},
  };

  static getDerivedStateFromProps(props, state) {
    if (JSON.stringify(props.error) !== JSON.stringify(state.error)) {
      return {
        error: props.error,
      };
    }
    return null;
  }

  commentChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  commentSubmit = (e) => {
    e.preventDefault();
    const { id, name, email, website, comment } = this.state;
    this.props.createComment({ id, name, email, website, comment });
    this.setState({
      comment: "",
    });
  };

  componentDidMount() {
    const params = this.props.match.params.postId;
    // const urls = `/api/post/${params}`

    this.props.SingleloadBlog(params);

    this.props.LoadComment(params);
  }

  cookieTest = () => {
    console.log("visited");
  };

  render() {
    const { data, error } = this.props;
    return (
      <>
        <Header />
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <Breadcrumbs title={data.title} />
            <div className="row">
              {error.message ? (
                <h1 style={stylefornotfount}>{error.message}</h1>
              ) : (
                <>
                  {data._id ? (
                    <>
                      <div className="col-lg-8 entries">
                        <Article data={data} />

                        <Author data={data} />

                        <Comment
                          changeHander={this.commentChangeHandler}
                          commentSubmit={this.commentSubmit}
                          comments={this.props.comments}
                          state={this.state}
                        />
                      </div>
                    </>
                  ) : (
                    <h1 style={stylefornotfount}>No Products Found</h1>
                  )}
                </>
              )}
              {/* <Sidebar /> */}
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.blog.singleBlog,
  error: state.blog.error,
  user: state.auth.user,
});
export default connect(mapStateToProps, {
  SingleloadBlog,
  createComment,
  LoadComment,
})(SingleBlog);
