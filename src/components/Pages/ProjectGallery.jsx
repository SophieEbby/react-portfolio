import React from 'react';
import Project from '../Project';
import projects from '../../data/projects.json';
import { Row, Col } from 'react-bootstrap';

function ProjectGallery() {
    return (
        <div className="container mt-5">
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <h1>Take A Look At My Web Dev Projects!</h1>
                </Col>
            </Row>
            <Row>
                {projects.map(project => (
                    <Col sm={12} md={6} lg={4} className="mb-4" key={project.id}> {/* Adjust grid sizes as needed */}
                        <Project project={project} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ProjectGallery;