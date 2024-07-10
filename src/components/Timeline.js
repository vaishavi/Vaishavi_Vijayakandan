
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp3.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Book, Briefcase, Mortarboard } from 'react-bootstrap-icons';


export const Timeline = () => {
    const timelineData = [
         {
            id: 1,
            title: 'Bachelor in Electronics and Communication Engineering',
            institution: 'Anna University, SSN College of Engineering - India',
            timing: "Aug 2017 - April 2021",
            category: "Study"
        },
        {
            id: 2,
            title: 'Senior Software Engineer',
            institution: 'Larsen & Toubro InfoTech – India',
            timing: "Aug 2021 - Dec 2022",
            category: "Work"
        },
         {
            id: 3,
            title: 'Master of Science in Computer Science',
            institution: 'The George Washington University',
            timing: "Jan 2023 - Present [ Expected: Dec 2024 ]",
            category: "Study"
        },
          {
            id: 4,
            title: 'Technical Support Specialist - Software Developer',
            institution: 'The George Washington University',
            timing: "Feb 2023 – Present",
            category: "Work"
        }
    ]
    return (

        <section className="timeline" id="timeline">
            <Container>
                <Row>
                    <Col>
                        <h2>Timeline</h2>
                        <p>Growing through code, marking milestones along the way.</p>
                    </Col>
                    <Row>
                        <VerticalTimeline className="timeline-edge">
                {timelineData.map((item, index) => {
                    const Icon = item.category === "Study" ? Mortarboard : Briefcase;
                    return (
                        <VerticalTimelineElement 
                            key={item.id}
                            date={item.timing}
                            dateClassName="date"
                            icon={<Icon size={60} className="time-line-icon"/>}
                           
                        >
                            <h4 className="vertical-timeline-element-title">{item.title}</h4>
                            <h5 id="description">{item.institution}</h5>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
                        
                    </Row>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} alt="Image" />


        </section>
      
    )
}