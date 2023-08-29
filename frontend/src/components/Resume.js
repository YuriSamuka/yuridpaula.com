import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faDownload } from '@fortawesome/free-solid-svg-icons'
import useIsMobile from '../custom-hooks/useIsMobile'


const Resume = () => {
  const isMobile = useIsMobile()

  const fadeInStyle = {
    // opacity: inView ? 1 : 0
    opacity: 1
  }

  const buttonStyle = {
    ...fadeInStyle,
    padding: "15px",
    fontWeight: "bold",
    marginRight: "18px",
    borderRadius: 0
  }

  return (
    <Container>
      <Row className='mb-5 mt-5'>
        <Col>
          <h1 className="px-3 mt-4" style={{ borderLeft: "2px solid rgb(83, 237, 106)" }}>
            Resume
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={{ borderRight: "2px solid rgb(83, 237, 106)" }}>
          <Button
            variant="outline-secondary"
            href="assets\cv\Yuri-fullstack-resume-2023.pdf"
            style={buttonStyle}
            target="_blank"
            className={isMobile ? "mb-2" : "0"}
          >
            View Resume
            <FontAwesomeIcon icon={faFileAlt} style={{ verticalAlign: "middle" }} className="ms-2" />
          </Button>
          <Button
            variant="outline-secondary"
            href="assets\cv\Yuri-fullstack-resume-2023.pdf"
            style={buttonStyle}
            target="_blank"
            download
            >
            Download Resume
            <FontAwesomeIcon icon={faDownload} style={{ verticalAlign: "middle" }} className="ms-2" />
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Resume