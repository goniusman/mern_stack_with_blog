import { Link } from "react-router-dom";

const Articles = ({ item, deletePost }) => {
  return (
    <article className="entry" key={item._id}>
      <div className="entry-img">
        {item.image ? (
          <img src={item.image} alt={item.image} className="img-fluid" />
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
        <Link
          target=""
          item={item}
          key={item._id}
          to={`/single-post/${item._id}`}
        >
          {item.title}
        </Link>
      </h2>

      <div className="entry-meta">
        <ul>
          <li className="d-flex align-items-center">
            <i className="bi bi-person"></i>{" "}
            <a href="blog-single.html">{item.author}</a>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-clock"></i>{" "}
            <a href="blog-single.html">
              <time>
                {new Date(item.createdAt).toLocaleDateString("en-BD")}{" "}
                {new Date(item.createdAt).toLocaleTimeString("en-BD")}
              </time>
            </a>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-chat-dots"></i>{" "}
            <a href="blog-single.html">{item.comments.length} Comments</a>
          </li>
        </ul>
      </div>

      <div className="entry-content">
        <p>{item.description}</p>
        <div className="read-more">
          <Link
            target=""
            item={item}
            key={item._id}
            to={`/single-post/${item._id}`}
          >
            <span className="h4 pr-5">Read More</span>
          </Link>
          <Link
            key={item._id}
            onClick={() => deletePost(item._id)}
          >
            <span className="h4 pr-5">Delete</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Articles;
