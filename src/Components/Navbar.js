import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <section className="navbar-sec">
        <div className="container-fluid">
          <nav className="navbar  navbar-expand-lg navbar-light">
            {/* <!-- navbar brand --> */}
            <a href="/" className="navbar-brand" id="nb">
              {props.title}
            </a>

            {/* <!-- hamburger menu --> */}
            <button
              className="navbar-toggler me-1"
              id="nbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navtoggle"
              aria-controls="navtoggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- navbar er baaki shob jinish --> */}
            <div className="collapse navbar-collapse" id="navtoggle">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    {" "}
                    Home
                  </a>
                </li>

                <li className="nav-item" id="lg">
                  <a className="nav-link" href="/">
                    {" "}
                    Education{" "}
                  </a>
                </li>

                <li className="nav-item" id="lg">
                  <a className="nav-link" href="/">
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li className="nav-item" id="lg">
                  <a className="nav-link" href="/">
                    {" "}
                    Contact Me{" "}
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- end of navbar --> */}
          </nav>
        </div>
      </section>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
