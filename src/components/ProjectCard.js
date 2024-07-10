import { Col } from "react-bootstrap";
import { Card } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Card className="project-card">
            <Card.Img variant="top" src={imgUrl} alt={title} />
            <Card.Body className="justified-text">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{}</Card.Text>
            </Card.Body>
        </Card>
    );
};
