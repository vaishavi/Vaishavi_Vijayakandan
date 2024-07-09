import { Col } from "react-bootstrap";
import { Card } from 'react-bootstrap';

// export const ProjectCard = ({ title, description, imgUrl }) => {
//     return (
//         <Col size={3} sm={3} md={4}>
//             <div className="proj-imgbx">
//                 <img src={imgUrl} />
//                 <div className="proj-txtx">
//                     <h4>{title}</h4>
//                     <span>{description}</span>
//                 </div>
//             </div>
//         </Col>
//     )
// }
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
