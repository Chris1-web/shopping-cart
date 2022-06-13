import github from "../images/github.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p className="footer">
        <a
          href="https://github.com/Chris1-web/CV-APP"
          target="_blank"
          rel="noreferrer"
        >
          <span>Copyright &copy; 2022 Christianah</span>
          <img alt="github icon" className="contact-github-icon" src={github} />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
