import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Form, Button } from "reactstrap";
import Widget from "./widget";

import { loadBlog, loadCategory } from "../../../store/actions/blogAction";

const Sidebar = ({ catLoad, tagLoad, posts, searchHandler }) => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [rposts, setRposts] = useState([]);
  const [lposts, setLposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // async function setCategories() {
    //   const categories = await Object.entries(
    //     groupArrayOfObjects(posts.allBlog, "category")
    //   );
    //   setCategories(categories);
    // }

    // async function setTags() {
    //   const tags = await Object.entries(
    //     groupArrayOfObjects(posts.allBlog, "tag")
    //   );
    //   setTags(tags);
    // }

    // setTags();
    // setCategories();

    setCategories({
      categories: Object.entries(
        groupArrayOfObjects(posts.allBlog, "category")
      ),
    });
    const lp = posts.allBlog.splice(0, 5);
    setLposts({
      lposts: lp,
    });
    setTags({
      tags: Object.entries(groupArrayOfObjects(posts.allBlog, "tag")),
    });

    setRposts({
      rposts: getRecentPost(),
    });
  }, []);

  const groupArrayOfObjects = (list, key) => {
    return list.reduce(function (rv, x) {
      // (rv[x[key]] = rv[x[key]] || []).push(x);
      if (rv[x[key]]) {
        rv[x[key]]++;
      } else {
        rv[x[key]] = 1;
      }
      return rv;
    }, []);
  };

  const getRecentPost = () => {
    let rposts;
    if (localStorage.getItem("rposts") === null) {
      rposts = [];
    } else {
      rposts = JSON.parse(localStorage.getItem("rposts"));
    }
    return rposts;
  };
  // console.log(state);
  return (
    <>
      <div className="col-lg-4">
        <div className="sidebar">
          <h3 className="sidebar-title">Search</h3>
          <div className="sidebar-item search-form">
            <Form>
              <Input
                type="search"
                onChange={(e) => searchHandler(e.target.value)}
                style={{ border: "none" }}
              />
              <Button type="submit">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
          </div>

          <Widget
            title="Categories"
            arr={categories.categories && categories.categories}
            Load={catLoad}
            posts={posts.allBlog}
          />

          <h3 className="sidebar-title">Recently Visited Posts</h3>
          <div className="sidebar-item recent-posts">
            {rposts.rposts && rposts.rposts.length > 0 ? (
              rposts.rposts.map((post) => (
                <div className="post-item clearfix">
                  {post.image ? (
                    <img src={post.image} alt={post.image} />
                  ) : (
                    <img src="../uploads/default.jpg" alt="" />
                  )}

                  <h4>
                    <Link to={`/single-post/${post._id}`}>{post.title}</Link>
                  </h4>
                  <time>{post.createdAt}</time>
                </div>
              ))
            ) : (
              <p>You didn't vist any post yet</p>
            )}
          </div>

          <Widget
            title="Tags"
            arr={tags.tags && tags.tags}
            Load={tagLoad}
            posts={posts.allBlog}
          />

          <h3 className="sidebar-title">Recently Visited Posts</h3>
          <div className="sidebar-item recent-posts">
            {lposts.lposts && lposts.lposts.length > 0 ? (
              lposts.lposts.map((post, i) => (
                <div className="post-item clearfix" key={i}>
                  {post.image ? (
                    <img src={post.image} alt={post.image} />
                  ) : (
                    <img src="../uploads/default.jpg" alt="" />
                  )}
                  <h4>
                    <Link to={`/single-post/${post._id}`}>{post.title}</Link>
                  </h4>
                  <time>{post.createdAt}</time>
                </div>
              ))
            ) : (
              <p>You didn't vist any post yet</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mamStateToProps = (state) => ({
  posts: state.blog,
  auth: state.auth,
});

export default connect(mamStateToProps, {})(Sidebar);
