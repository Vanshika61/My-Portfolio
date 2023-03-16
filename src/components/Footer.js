import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <div>
        <footer
          className="text-center text-lg-start text-light footer1"
        //   style="background-color: #3e4551"
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row d-flex justify-content-center align-items-centerd font">FOLLOW ME</div>
            </section>

            <hr className="mb-4" />

            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="font1">Let us be social</span>
              </p>
            </section>

            <hr className="mb-4" />

            <section className="mb-4 text-center">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.facebook.com/profile.php?id=100069630622892"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.instagram.com/itz_vanshika__07/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.linkedin.com/in/thevanshikaagrawal/"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://github.com/Vanshika61"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center p-3 footer2"
            // style="background-color: rgba(0, 0, 0, 0.2)"
          >
            <a className="text-white font1" href="#hero_section">
              Made with ❤ by Vanshika
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
