import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <nav aria-label="...">
      <ul class="pagination">
        <li
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          class={`page-item ${currentPage == 1 ? "disabled" : ""}`}
        >
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
            Previous
          </a>
        </li>
        {[...Array(totalPages)].map((page, idx) => (
          <li
            onClick={() => setCurrentPage(idx + 1)}
            class={`page-item ${currentPage == idx + 1 ? "active" : ""}`}
          >
            <a class="page-link" href="#">
              {idx + 1}
            </a>
          </li>
        ))}
        <li
          onClick={() =>
            currentPage !== totalPages && setCurrentPage(currentPage + 1)
          }
          class={`page-item ${currentPage == totalPages ? "disabled" : ""}`}
        >
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
