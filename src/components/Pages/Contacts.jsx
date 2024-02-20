import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <h1>Contact Me!</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Information</Card.Title>
                            <p>Email: sophieebsworth@hotmail.co.uk</p>
                            <p>Phone: +447738184182</p>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title>Contact Form</Card.Title>
                            {showAlert && <Alert variant="success">Your message has been submitted successfully!</Alert>}
                            <Form onSubmit={handleSubmit}>
                                {/* Form fields */}
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Your message" />
                                </Form.Group>

                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title>Follow Me</Card.Title>
                            <a href="https://www.linkedin.com/in/sophie-ebsworth-bsc-hons-engtech-tmiet-a5a4b198/" className="me-3" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a href="https://github.com/SophieEbby" className="me-3" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;