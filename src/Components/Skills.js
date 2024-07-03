import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../Assets/img/meter1.svg';
import meter2 from '../Assets/img/meter2.svg';
import meter3 from '../Assets/img/meter3.svg';
import melter4  from '../Assets/img/melter4.svg'
import colorSharp from '../Assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>With expertise in Web Development, Graphic Design, and Video Editing, I transform ideas into stunning digital experiences. My ability to craft visually striking websites, compelling graphics, and engaging videos sets me apart. Driven by innovation and a commitment to excellence, I consistently deliver top-tier results that captivate and inspire.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTMl</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>JAVA SCRIPT</h5>
                </div>
                <div className="item">
                  <img src={melter4} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Mongo DB</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Photoshop</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Capcut</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </div>
  );
};

export default Skills;
