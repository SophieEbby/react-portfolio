import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.Title}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <a href={project.deployedLink}><Button variant="primary">View Project</Button></a>
                <a href={project.repoLink}><Button variant="primary">GitHub Repo</Button></a>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;