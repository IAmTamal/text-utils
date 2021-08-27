import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <section className="navbar-sec">
        <div class="container-fluid">
          <nav class="navbar  navbar-expand-lg navbar-light">
            {/* <!-- navbar brand --> */}
            <a href="/" class="navbar-brand" id="nb">
              {props.title}
            </a>

            {/* <!-- hamburger menu --> */}
            <button
              class="navbar-toggler me-1"
              id="nbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navtoggle"
              aria-controls="navtoggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            {/* <!-- navbar er baaki shob jinish --> */}
            <div class="collapse navbar-collapse" id="navtoggle">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="/">
                    {" "}
                    Home
                  </a>
                </li>

                <li class="nav-item" id="lg">
                  <a class="nav-link" href="/">
                    {" "}
                    Education{" "}
                  </a>
                </li>

                <li class="nav-item" id="lg">
                  <a class="nav-link" href="/">
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li class="nav-item" id="lg">
                  <a class="nav-link" href="/">
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
