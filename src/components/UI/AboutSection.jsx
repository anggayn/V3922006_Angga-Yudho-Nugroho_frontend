import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/pakaian-img/tentangkami.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Traditional Dress</h2>
              <p className="section__description">
              Traditional dress memiliki tekad untuk mempertahankan dan merayakan keindahan warisan pakaian adat dari berbagai budaya di
 seluruh Indonesia. Kami berkomitmen untuk memberikan pengalaman penyewaan yang tak tertandingi, memadukan kualitas,
 keragaman yang luar biasa. Kami ingin membantu Anda merayakan acara-acara istimewa dalam hidup Anda dengan penuh gaya 
dan makna. Dengan menyediakan akses mudah ini, kami berharap dapat memfasilitasi pertukaran budaya yang saling
 memperkaya.
             </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
