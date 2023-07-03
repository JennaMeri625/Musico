import GitHubButton from "react-github-btn";

export function Footer() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
    <div className="flex-grow-1"></div>
    <footer
      className="fixed-bottom text-center text-white"
      style={{ backgroundColor: "black", height: "50px" }}
      >
        <div>
        <GitHubButton href="https://github.com/omareo22" data-show-count="true" aria-label="Follow @omareo22 on GitHub">Follow @omareo22</GitHubButton>
        <GitHubButton href="https://github.com/JennaMeri625" data-show-count="true" aria-label="Follow @JennaMeri625 on GitHub">Follow @JennaMeri625</GitHubButton>
        <GitHubButton href="https://github.com/trelaj" data-show-count="true" aria-label="Follow @trelaj on GitHub">Follow @trelaj</GitHubButton>
        <GitHubButton href="https://github.com/lancechise" data-show-count="true" aria-label="Follow @lancechise on GitHub">Follow @lancechise</GitHubButton>
        </div>
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "lightGrey" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
