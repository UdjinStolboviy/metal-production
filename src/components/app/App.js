import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../header";
import Container from "react-bootstrap/Container";
import Header from "../header";
import Carousels from "../carousel";
import ServicesMet from "../servicesMet";
import { Row, Col } from "react-bootstrap";
import OurCompany from "../ourCompany";
import FooterSite from "../footerSite";

function App() {
  return (
    <Container className=" p-0 m-0" fluid>
      <Row>
        <Col className=" p-0 m-0">
          <Header />
          <Carousels />
          <ServicesMet />
          <OurCompany />
          <FooterSite />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
