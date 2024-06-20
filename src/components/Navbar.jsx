import React from "react";

const Navbar = ({ setcategory, setSearchText }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span
            onClick={() => setSearchText("")}
            className="badge bg-light text-dark fs-4"
          >
            Quick <span className="badge bg-danger">News</span>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ display: "flex", justifyContent: "space-between" }}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div
                className="nav-link"
                onClick={() => setcategory("technology")}
              >
                Technology
              </div>
            </li>
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div className="nav-link" onClick={() => setcategory("business")}>
                Business
              </div>
            </li>
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div className="nav-link" onClick={() => setcategory("health")}>
                Health
              </div>
            </li>
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div className="nav-link" onClick={() => setcategory("sports")}>
                Sports
              </div>
            </li>
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div
                className="nav-link"
                onClick={() => setcategory("technology")}
              >
                entertainment
              </div>
            </li>
          </ul>
          <form
            onSubmit={(e) => e.preventDefault()}
            class="d-flex"
            role="search"
          >
            <input
              id="input-search"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={() => {
                const inputele = document.getElementById("input-search");
                setSearchText(inputele.value);
                inputele.value = "";
              }}
              className="btn btn-danger"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
