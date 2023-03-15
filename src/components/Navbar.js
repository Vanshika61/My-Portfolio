import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="nav_bar">
        <div className="container-fluid" id="main_div">
          <div id="nav_logo">
            <h2 id="logo_heading">My Portfolio</h2>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-2" id="nav_ul">
              <li className="nav-item">
                <a className="nav-link active"aria-current="page" href="#hero_section">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Personal Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Socials</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
  );
}
