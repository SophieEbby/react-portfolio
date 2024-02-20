import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"; 
import mypic from "../../../public/images/mugshot.jpg";
import mycv from "../../../public/cv.pdf"
import "./style.css";

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <h1>Welcome to My Portfolio</h1>
                    <h2>About me</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Image fluid src={mypic} alt="Sophie Ebsworth" className="mypic float-left" />
                    <p className="biotext">I am a 28 year old female, living in Southampton England. I am a qualifed SCADA Engineer, having spent 9 years developing control systems for various industries such as Railway, Airports and Water. I have a BSc (Hons) in Electrical and Electronic Engineering from the <a href="https://www.derby.ac.uk/" rel="noreferrer noopener" target="_blank">University of Derby</a>  and I gained my further education through a <a href="https://www.siemens.com/global/en.html" rel="noreferrer noopener" target="_blank">Siemens</a> apprenticeship. I am now looking to develop my skills further and become a Front End Developer. </p>
                    <Button variant="primary" href={mycv}download="SophieEbsworth_CV.pdf">Download CV</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;