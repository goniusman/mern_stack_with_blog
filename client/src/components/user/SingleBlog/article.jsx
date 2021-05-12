import React from "react";
import { Link } from "react-router-dom";

const Article = ({ data }) => {
  return (
    <>
      <article className="entry entry-single">
        <div className="entry-img">
          {data.image ? (
            <img src={data.image} alt={data.image} className="img-fluid" />
          ) : (
            <img
              src="../uploads/default.png"
              alt="default"
              className="img-fluid"
              style={{ width: "100%" }}
            />
          )}
        </div>

        <h2 className="entry-title">
          <Link>{data.title}</Link>
        </h2>

        <div className="entry-meta">
          <ul>
            <li className="d-flex align-items-center">
              <i className="bi bi-person"></i> <Link>{data.author}</Link>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-clock"></i>{" "}
              <Link>
                <time>
                  {new Date(data.createdAt).toLocaleDateString("en-bd")}
                </time>
              </Link>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-chat-dots"></i>{" "}
              <Link>{data.comments && data.comments.length} Comments</Link>
            </li>
          </ul>
        </div>

        <div className="entry-content">{data.description}</div>

        <div className="entry-footer">
          <i className="bi bi-folder"></i>
          <ul className="cats">
            <li>
              <Link>Business</Link>
            </li>
          </ul>

          <i className="bi bi-tags"></i>
          <ul className="tags">
            <li>
              <Link>Creative</Link>
            </li>
            <li>
              <Link>Tips</Link>
            </li>
            <li>
              <Link>Marketing</Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default Article;
