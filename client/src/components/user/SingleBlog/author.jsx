import React from "react";
import { Link } from "react-router-dom";

const Author = ({ data }) => {
  return (
    <>
      <div className="blog-author d-flex align-items-center">
        <img
          src="../uploads/default-author.jpg"
          className="rounded-circle float-left"
          alt=""
        />
        <div>
          <h4>{data.author}</h4>
          <div className="social-links">
            <Link to="/">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="/">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="/">
              <i className="biu bi-instagram"></i>
            </Link>
          </div>
          <p>
            Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed
            possimus accusantium. Quas repellat voluptatem officia numquam sint
            aspernatur voluptas. Esse et accusantium ut unde voluptas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Author;
