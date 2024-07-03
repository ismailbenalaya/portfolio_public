import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../Assets/img/contact-img.svg';
import { ToastContainer,toast,Bounce} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const FormulaireDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };
    const [formDetails, setFormDetails] = useState(FormulaireDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const formUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };
    const notify = (message) => {
        toast.info(message,{position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/postContact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        if (result.code === 200) {
            console.log({ success: true, message: 'Email sent successfully' });
            setFormDetails(FormulaireDetails);
            notify('Email sent successfully');
        } else {
            setStatus({ success: false, message: 'Something went wrong...' });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) => formUpdate('firstName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) => formUpdate('lastName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) => formUpdate('email', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Phone Number"
                                        onChange={(e) => formUpdate('phone', e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <textarea
                                        value={formDetails.message}
                                        placeholder="Write your message"
                                        onChange={(e) => formUpdate('message', e.target.value)}
                                    />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {status.message && (
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                )}
                            </Row>
                        </form>
                        <ToastContainer />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
