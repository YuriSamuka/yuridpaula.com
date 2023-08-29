import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-light py-4">
            <Container>
                <Row className="justify-content-center mb-3">
                    <Col xs={3} sm={1} className="text-center">
                        <a href="mailto:your-email@example.com">
                            <img src="assets/email.png" alt="Email" width="30" height="30" />
                        </a>
                    </Col>
                    <Col xs={3} sm={1} className="text-center">
                        <a href="https://www.linkedin.com/your-profile">
                            <img src="assets/linkedin.png" alt="LinkedIn" width="30" height="30" />
                        </a>

                    </Col>
                    <Col xs={3} sm={1} className="text-center">
                        <a href="https://github.com/your-username">
                            <img src="assets/github3.png" alt="GitHub" width="30" height="30" />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">
                            &copy; <span>{currentYear}</span> Yuri D Paula. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;