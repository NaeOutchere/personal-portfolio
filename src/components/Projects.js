import React from 'react';
import { Col, Container, Row, Tab} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Weather from '../assets/img/Weather.png';
import Filmz from '../assets/img/Filmz.png';
import JustFoods from '../assets/img/justFood.png';
import Portfolio from '../assets/img/personalportfolio.png';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

    const projects = [
        {
            title: "Weather Application",
            description: "Weather app made with Reactjs, Tailwind CSS and Luxon which provides detailed information for locations and changes color based on temperature",
            imgUrl: Weather,
        },
        {
            title: "Filmz",
            description: "Movie Database app made with Reactjs, SASS and Axios where you can watch trailers and get information on Tv Shows and Movies.",
            imgUrl: Filmz,
        },
        {
            title: "Just Food",
            description: "Food Delivery e-commerce app made with Reactjs, Tailwind CSS and Firebase where food can be purchase.",
            imgUrl: JustFoods,
        },
        {
            title: "Personal Portfolio",
            description: "My personal portfolio web application made with Reactjs, Bootstrap and Nodemailer.",
            imgUrl: Portfolio,
        },
    ]
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projects</h2>
                            <p>Browse through my web development projects and a few of my designs. Hovering will provide a scope of  the project and what was used to create it.</p>
                            <Tab.Container id='projects-tabs' defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-content-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Web Designs</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            UI/UX Designs
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard key={index} {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <p>COMING SOON!</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <p>COMING SOON!</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt=""></img>
        </section>
    );
}
