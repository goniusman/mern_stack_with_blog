import _ from "lodash";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Pagination = ({ items, pageSize, pageChange, currentPage }) => {
  const pageCount = Math.ceil(items / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="blog-pagination">
      <ul className="justify-content-center">
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? "active" : ""}>
            <Link onClick={() => pageChange(page)}>{page}</Link>
          </li>
        ))}
        {/* <li className="active"><a href="#">2</a></li> */}
      </ul>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  items: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
