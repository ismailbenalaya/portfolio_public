import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowDown } from "react-bootstrap-icons";
import headerImg from '../Assets/img/Logo2.svg';
import 'animate.css';
import TrackVisibility from "react-on-screen";
import CV from '../Assets/files/CV_MED.pdf';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Graphic Designer","Video Editor"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
               
                           
                                <div>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi, I'm Med Ismail`}<span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Graphic Designer"]'><span className="wrap"> {text}</span></span></h1>
                                    <p>Welcome to my portfolio! I'm Mohamed Ismail, a dedicated web developer and graphic designer specializing in creating impactful digital experiences. With a passion for innovation and a commitment to excellence, I excel in crafting visually compelling designs and efficient web solutions.</p>
                                    <a href={CV} download="CV_MED.pdf">
                                        <button>Download CV<ArrowDown size={15} /></button>
                                    </a>
                                </div>
                     
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
