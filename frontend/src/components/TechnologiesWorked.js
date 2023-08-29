import React from 'react';
import { Row, Col } from 'react-bootstrap';
import useIsMobile from '../custom-hooks/useIsMobile';

const TechnologiesWorked = () => {
    const isMobile = useIsMobile()
    const h5Style = {
        padding: "5px",
        backgroundColor: "#6c757d",
        color: "white",
    }

    const imgStyle = {
        width: '55px',
        padding: "5px"
    }

    const frontendTechBox = <Col xs={12} sm={4} className={isMobile ? "mb-3" : ""}>
        <Row className="justify-content-center">
            <Col xs="12">
                <h5 className='text-center' style={h5Style} >FRONTEND</h5>
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/htmllogo.png" alt="Technology 1" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/csslogo.png" alt="Technology 2" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/reactlogo2.png" alt="Technology 3" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/reduxlogo2.png" alt="Technology 1" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/jquery.png" alt="Technology 2" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/bootstraplogo.png" alt="Technology 3" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/material-ui.png" alt="Technology 3" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/metamask.png" alt="Technology 3" style={imgStyle} />
            </Col>
        </Row>
    </Col>

    const backendTechBox = <Col xs={12} sm={4} className={isMobile ? "mb-3" : ""}>
        <Row className="justify-content-center">
            <Col xs="12">
                <h5 className='text-center' style={h5Style} >BACKEND</h5>
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/nodelogo.png" alt="Technology 1" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img
                    src="assets/TechnologiesWorked/expresslogo2.png"
                    alt="Express.js"
                    style={{
                        ...imgStyle,
                        paddingLeft: "0",
                        paddingRight: "0",
                        paddingTop: "25px",

                    }}
                />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/typescript.png" alt="Technology 3" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <p
                    style={{
                        ...imgStyle,
                        fontSize: "14px",
                        fontWeight: "lighter",
                        paddingTop: "15px"
                    }}
                >Objection.js
                </p>
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/postgreslogo.png" alt="Technology 2" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/mysql.jpg" alt="Technology 3" style={imgStyle} className='p-0' />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/DynamoDB.png" alt="Technology 2" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/socket-io-logo.png" alt="Technology 3" style={imgStyle} />
            </Col>
        </Row>
    </Col>

    const devOpsTechBox = <Col xs={12} sm={4} className={isMobile ? "mb-3" : ""}>
        <Row className="justify-content-center">
            <Col xs="12">
                <h5 className='text-center' style={h5Style} >DEVOPS</h5>
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/linux.png" alt="Technology 1" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/docker.png" alt="Technology 2" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/aws.png" alt="Technology 3" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/cicd.png" alt="Technology 1" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/github-actions.png" alt="Technology 2" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/heroku.png" alt="Technology 3" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/gitlogo.png" alt="Technology 2" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/nginx.png" alt="Technology 3" style={imgStyle} />
            </Col>
        </Row>
    </Col>

    const languagesTechBox = <Col xs={12} sm={4} className={isMobile ? "mb-3" : ""}>
        <Row className="justify-content-center">
            <Col xs="12">
                <h5 className='text-center' style={h5Style} >LANGUAGES</h5>
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/jslogo.png" alt="Technology 1" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/php_.png" alt="Technology 2" style={{ width: "55px" }} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/python.png" alt="Technology 3" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img
                    src="assets/TechnologiesWorked/solidity.png"
                    alt="solidity"
                    style={{
                        width: "65px",
                        paddingTop: "10px"
                    }}
                />
            </Col>
        </Row>
    </Col>
    const toolsTechBox = <Col xs={12} sm={4} className={isMobile ? "mb-3" : ""}>
        <Row className="justify-content-center">
            <Col xs="12">
                <h5 className='text-center' style={h5Style} >TOOLS & TESTING</h5>
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/vscode.png" alt="Technology 1" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/postman.png" alt="Technology 2" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/jest.png" alt="Technology 3" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/yed-logo.png" alt="Technology 1" style={imgStyle} />
            </Col>
        </Row>
    </Col>
    const testingTechBox = <Col xs={12} sm={4} className={isMobile ? "mb-3" : ""}>
        <Row className="justify-content-center">
            <Col xs="12">
                <h5 className='text-center' style={h5Style} >OTHERS</h5>
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/figma.png" alt="Technology 1" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/jira.png" alt="Technology 2" style={imgStyle} />
            </Col>
            <Col xs="auto">
                <img src="assets/TechnologiesWorked/scrum.png" alt="Technology 3" style={imgStyle} />
            </Col>
        </Row>
    </Col>

    return (
        <>
            <Row className="text-center">
                <Col>
                    <h2 className='mb-4'>Technologies I've worked with</h2>
                </Col>
            </Row>
            <Row>
                {frontendTechBox}
                {backendTechBox}
                {devOpsTechBox}
            </Row>
            <hr />
            <Row className='mb-5'>
                {languagesTechBox}
                {toolsTechBox}
                {testingTechBox}
            </Row>
        </>
    );
};

export default TechnologiesWorked;
