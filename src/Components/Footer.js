import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/img/logo1.svg";
import navIcon from '../Assets/img/nav-icon1.svg';
import navIcon2 from '../Assets/img/nav-icon2.svg';
import navIcon3 from '../Assets/img/nav-icon3.svg';
import './Footer.css';  // Import the CSS file for styles

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={4}>
            <img src={logo} alt="Company Logo" className="footer-logo" />
          </Col>
          <Col sm={4} className="text-center">
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </nav>
          </Col>
          <Col sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohamed-ismail-ben-alaya-851898222" target="_blank" rel="noopener noreferrer">
                <img src={navIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100069476391733&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/ismailbenalaya/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Facebook" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
