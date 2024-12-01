import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
              <a href="#" onClick={() => (window.location.href = 'https://de.linkedin.com/in/ahmad-aljwaed-3512362b9')}>
  <img src={navIcon1} alt="LinkedIn" />
</a>
<a href="#" onClick={() => (window.location='https://github.com/A-Aljwaed')}>
  <img src={navIcon3} alt="GitHub" />
</a>

<a href="#" onClick={() => (window.location='https://facebook.com/Ahmed-jowed')}>
  <img src={navIcon2} alt="Facebook" />
</a>
              </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
