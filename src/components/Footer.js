import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/denaerose1.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-logo-24.png';
import navIcon3 from '../assets/img/mail.png';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <img src={logo} className='logo' alt='Logo' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/denae-rose-8a3b2045"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/NaeOutchere"><img src={navIcon2} alt=""/></a>
                            <a href="mailto:denaerose97@yahoo.com"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
