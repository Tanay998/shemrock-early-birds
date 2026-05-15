import React from "react";

function Navbar() {
  return (
    <>
      <div className="top-bar">
        📞 +91-9627950365 | ✉️ info@shemrockearlybirds.com
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="logo-text">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="logo img-fluid"
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            ☰
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Programs
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Facilities
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;