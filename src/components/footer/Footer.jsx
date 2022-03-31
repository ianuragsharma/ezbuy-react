import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer text-white text-center">
        <div className="fw-800 text-xl">
          Get in touch with me:
          <a href="mailto:anuragsharma0711@gmail.com ">anuragsharma0711</a>
        </div>
        <ul className="flex-row footer-item">
          <li>
            <a
              href="https://github.com/ianuragsharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github fa-lg"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ianuragsharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/ianuragsharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin  fa-lg"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export { Footer };
