import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ categories, catLoad, searchHandler, tags, tagLoad }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="sidebar">
          <h3 className="sidebar-title">Search</h3>
          <div className="sidebar-item search-form">
            <form action="">
              <input
                type="search"
                onChange={(e) => searchHandler(e.target.value)}
              />
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
                  <li key={cat[0]}>
                    <Link to="/blog" onClick={() => catLoad(cat[0])}>
                      {cat[0]} <span>({++cat[1].length})</span>
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
              {tags.length &&
                tags.map((tag) => (
                  <li key={tag}>
                    <Link to="/blog" onClick={() => tagLoad(tag[0])}>
                      {tag[0]} ({++tag[1].length})
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
