import React from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  loadBlog,
  createPost,
  loadCategory,
  deletePost,
  editPost,
} from "../../../store/actions/blogAction";
import Breadcrumbs from "../breadcrumbs";
import PostForm from "./postForm";
import Sidebar from "../sidebar";
import Pagination from "../../common/Pagination";
import { paginate } from "../../../utils/paginate";
import Articles from "./article";
import Footer from "../footer";
import Header from "../header";

class Blog extends React.Component {
  state = {
    title: "",
    description: "",
    tag: "",
    category: "",
    author: this.props.auth.user.name,
    file: "",
    pageSize: 2,
    currentPage: 1,
    error: {},
    loaded: 0,
    cat: "",
    postId: "",
    searchTerm: "",
    tag: "",
  };

  static getDerivedStateFromProps(props, state) {
    if (JSON.stringify(props.posts.error) !== JSON.stringify(state.error)) {
      return {
        error: props.posts.error,
      };
    }
    return null;
  }

  componentDidMount() {
    // fetch("/api/post")
    //     .then(res => res.json())
    //     .then(data => this.setState({posts: data}))

    //    Axios.get("http://localhost:2000/api/post")
    //         .then((data) => (this.setState({posts: data.data})))
    //         .catch((err) => console.log(err))

    this.props.loadBlog();
    this.props.loadCategory();
  }

  // shouldComponentUpdate() {
  //   // console.log("com update call");
  //   // this.props.loadBlog();
  //   // this.props.loadCategory();
  // }

  // componentDidUpdate(prevProps) {
  //   console.log(this.props.posts);
  //   if (this.props.posts.length !== prevProps.posts.allBlog.length) {
  //   this.props.loadBlog();
  //   }
  // }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  maxSelectFile = (event) => {
    let files = event.target.files; // create file object
    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
      event.target.value = null; // discard selected file
      console.log(msg);
      return false;
    }
    return true;
  };

  checkMimeType = (event) => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = "";
    // list allow mime type
    const types = ["image/png", "image/jpeg", "image/gif"];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => files[x].type !== type)) {
        // create error message and assign to container
        err += files[x].type + " is not a supported format\n";
      }
    }

    if (err !== "") {
      // if message not same old that mean has error
      event.target.value = null; // discard selected file
      console.log(err);
      toast.error(err);
      return false;
    }
    return true;
  };

  checkFileSize = (event) => {
    let files = event.target.files;
    let size = 345000;
    let err = "";
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err += files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    if (err !== "") {
      // if message not same old that mean has error
      event.target.value = null; // discard selected file
      console.log(err);
      toast.error(err);
      return false;
    }

    return true;
  };

  imageHandler = (e) => {
    if (this.checkMimeType(e) && this.checkFileSize(e)) {
      this.setState({
        file: e.target.files[0],
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, category, tag, author, file, postId } =
      this.state;
    let formdata = new FormData();
    // formdata.append("id", postId);
    formdata.append("file", file);
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("author", author);
    formdata.append("tag", tag);
    formdata.append("category", category);
    if (postId != "") {
      this.props.editPost(formdata, postId);
    }
    this.props.createPost(formdata);

    if (Object.keys(this.props.posts.error).length === 0) {
      this.setState({
        title: "",
        description: "",
        category: "",
        tag: "",
        file: "",
      });
    }
  };

  pageChangeEvent = (page) => {
    // e.preventDefault()
    this.setState({
      currentPage: page,
    });
  };

  deletePost = (id) => {
    this.props.deletePost(id);
  };

  editPost = (item) => {
    console.log(item);
    this.setState({
      title: item.title,
      description: item.description,
      category: item.category,
      tag: item.tag,
      postId: item._id,
    });
  };

  performSearch = () => {
    let { allBlog } = this.props.posts;
    if (allBlog.length > 0) {
      return allBlog.filter((post) =>
        post.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
    }
  };

  searchHandler = (e) => {
    this.setState({
      searchTerm: e,
      currentPage: 1,
    });
  };

  groupArrayOfObjects = (list, key) => {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, []);
  };

  handlePost = () => {
    const { posts: allPosts } = this.props;
    const { currentPage, pageSize, cat, tag } = this.state;

    let tagposts;

    if (cat) {
      tagposts = allPosts.allBlog.filter((p) => p.category === cat);
    } else if (tag) {
      tagposts = allPosts.allBlog.filter((p) => p.tag === tag);
    } else {
      tagposts = allPosts.allBlog;
    }

    tagposts = this.performSearch();

    let aposts = paginate(tagposts, currentPage, pageSize);
    let posts =
      aposts.length > 0 ? (
        aposts.map((item) => (
          <Articles
            key={item._id}
            item={item}
            deletePost={this.deletePost}
            editPost={this.editPost}
          />
        ))
      ) : (
        <p>There are no posts</p>
      );
    return posts;
  };

  catLoad = (catname) => {
    this.setState({ cat: catname, currentPage: 1 });
  };

  tagLoad = (tagname) => {
    this.setState({ tag: tagname, currentPage: 1 });
  };

  performCat = (posts) => {
    const { cat } = this.state;
    return posts.filter((p) => p.category === cat);
  };

  handlePagination = () => {
    let { posts: allPosts } = this.props;
    // allPosts = this.performCat(allPosts.allBlog);
    const { currentPage, pageSize, cat, tag } = this.state;
    let tagposts = cat;

    if (cat) {
      tagposts = allPosts.allBlog.filter((p) => p.category === cat);
    } else if (tag) {
      tagposts = allPosts.allBlog.filter((p) => p.tag === tag);
    } else {
      tagposts = allPosts.allBlog;
    }

    // tagposts = this.performSearch();

    return (
      <Pagination
        items={tagposts && tagposts.length}
        currentPage={currentPage}
        pageSize={pageSize}
        pageChange={this.pageChangeEvent}
      />
    );
  };



  render() {
    const { auth, posts, error } = this.props;

    const categories = Object.entries(
      this.groupArrayOfObjects(posts.allBlog, "category")
    );

    const tagposts = Object.entries(
      this.groupArrayOfObjects(posts.allBlog, "tag")
    );

    return (
      <>
        <Header />
        <Breadcrumbs title="All Blog" />
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8 entries">
                <div className="form-group">
                  <ToastContainer />
                </div>
                {auth.isAuthenticated && (
                  <PostForm
                    name={this.props.auth.user.name}
                    changeHandler={this.changeHandler}
                    handleSubmit={this.handleSubmit}
                    imageHandler={this.imageHandler}
                    state={this.state}
                    categories={posts.categories}
                    error={error}
                  />
                )}
                {/* {posts.allBlog && posts.allBlog.length} */}
                {this.handlePost()}
                {this.handlePagination()}
              </div>

              <Sidebar
                searchHandler={this.searchHandler}
                categories={categories}
                catLoad={this.catLoad}
                tags={tagposts}
                tagLoad={this.tagLoad}
              />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

const mamStateToProps = (state) => ({
  posts: state.blog,
  auth: state.auth,
});

export default connect(mamStateToProps, {
  loadBlog,
  createPost,
  loadCategory,
  deletePost,
  editPost,
})(Blog);
