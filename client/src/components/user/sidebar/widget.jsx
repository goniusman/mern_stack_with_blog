import React from "react";
import { Link } from "react-router-dom";

function Widget({ arr, title, Load, posts }) {
  return (
    <>
      <h3 className="sidebar-title">{title}</h3>
      <div className="sidebar-item tags">
        <ul>
          <li>
            <Link to="/blog" onClick={() => Load("")}>
              All <span>({posts && posts.length})</span>
            </Link>
          </li>
          {arr &&
            arr.map((item) => (
              <li key={item}>
                <Link to="/blog" onClick={() => Load(item[0])}>
                  {item[0]} ({item[1]})
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Widget;
