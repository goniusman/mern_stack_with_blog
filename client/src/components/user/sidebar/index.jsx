import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ categories, catLoad }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="sidebar">
          <h3 className="sidebar-title">Search</h3>
          <div className="sidebar-item search-form">
            <form action="">
              <input type="text" />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>

          <h3 className="sidebar-title">Categories</h3>
          <div className="sidebar-item categories">
            <ul>
              <li>
                <Link to="/blog" onClick={() => catLoad("")}>
                  All <span>()</span>
                </Link>
              </li>
              {categories.length > 0 &&
                categories.map((cat) => (
                  <li key={cat._id}>
                    <Link to="/blog" onClick={() => catLoad(cat.category)}>
                      {cat.category} <span>(0)</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <h3 className="sidebar-title">Recent Posts</h3>
          <div className="sidebar-item recent-posts">
            <div className="post-item clearfix">
              <img src="../uploads/default.jpg" alt="" />
              <h4>
                <Link to="blog-single.html">
                  Nihil blanditiis at in nihil autem
                </Link>
              </h4>
              <time>Jan 1, 2020</time>
            </div>

            <div className="post-item clearfix">
              <img src="../uploads/default.jpg" alt="" />
              <h4>
                <Link to="blog-single.html">Quidem autem et impedit</Link>
              </h4>
              <time>Jan 1, 2020</time>
            </div>

            <div className="post-item clearfix">
              <img src="../uploads/default.jpg" alt="" />
              <h4>
                <Link to="blog-single.html">
                  Id quia et et ut maxime similique occaecati ut
                </Link>
              </h4>
              <time>Jan 1, 2020</time>
            </div>

            <div className="post-item clearfix">
              <img src="../uploads/default.jpg" alt="" />
              <h4>
                <Link to="blog-single.html">
                  Laborum corporis quo dara net para
                </Link>
              </h4>
              <time>Jan 1, 2020</time>
            </div>

            <div className="post-item clearfix">
              <img src="../uploads/default.jpg" alt="" />
              <h4>
                <Link to="blog-single.html">
                  Et dolores corrupti quae illo quod dolor
                </Link>
              </h4>
              <time>Jan 1, 2020</time>
            </div>
          </div>

          <h3 className="sidebar-title">Tags</h3>
          <div className="sidebar-item tags">
            <ul>
              <li>
                <Link to="/">App</Link>
              </li>
              <li>
                <Link to="/">IT</Link>
              </li>
              <li>
                <Link to="/">Business</Link>
              </li>
              <li>
                <Link to="/">Mac</Link>
              </li>
              <li>
                <Link to="/">Design</Link>
              </li>
              <li>
                <Link to="/">Office</Link>
              </li>
              <li>
                <Link to="/">Creative</Link>
              </li>
              <li>
                <Link to="/">Studio</Link>
              </li>
              <li>
                <Link to="/">Smart</Link>
              </li>
              <li>
                <Link to="/">Tips</Link>
              </li>
              <li>
                <Link to="/">Marketing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
