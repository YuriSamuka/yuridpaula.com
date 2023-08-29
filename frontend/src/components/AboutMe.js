import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import TechnologiesWorked from './TechnologiesWorked'
import useIsMobile from '../custom-hooks/useIsMobile'

const AboutMe = () => {
  const isMobile = useIsMobile()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const paragraphStyle = {
    textAlign: "justify",
    paddingTop: "15px"
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="px-3 mt-4" style={{ borderLeft: "2px solid rgb(83, 237, 106)" }}>
            About Me
          </h1>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={5}
          style={{ padding: isMobile ? "50px 50px 30px" : "80px 80px 80px" }}
        >
          <img src="assets/eu_alpha.png" alt="Image" className="img-fluid" />
        </Col>
        <Col
          className='mb-2'
          xs={12}
          sm={7}
          style={{
            padding: isMobile ? "0px 10px 0px" : "0px 70px 50px",
            borderRight: "2px solid rgb(83, 237, 106)"
          }}
        >
          <p style={paragraphStyle}>
            Hi, I'm Yuri, a passionate software engineer with over than 7 years of experience in the field and a drive to explore new opportunities. With a strong background in full-stack development, I am dedicated to solving complex problems and staying up-to-date with the latest technologies.
          </p>
          <p style={paragraphStyle}>
            I have had the privilege of working with a diverse range of companies throughout my journey, allowing me to cultivate my skills in a multitude of technologies. I am proficient in front-end development using HTML, CSS, and JavaScript, creating engaging user interfaces. On the back-end side, I have experience with Node.js, Postgres, PHP, MySQL, and more. I am well-versed in utilizing tech stacks like PERN and LAMP to develop robust applications.
          </p>
          <p style={paragraphStyle}>
            Additionally, I have delved into smart contract languages such as Solidity and specialized languages like MQL5 for algorithmic trading. My background also encompasses strong knowledge of design patterns and industry best practices, ensuring the delivery of clean and efficient code.
          </p>
          {/* <p style={paragraphStyle}>
            What sets me apart is my continuous pursuit of knowledge and my commitment to collaboration. I believe in the power of teamwork and thrive in environments where ideas are shared and innovation is encouraged. By keeping myself updated with the latest industry trends and pushing boundaries, I bring fresh perspectives and creative solutions to the table.
          </p> */}
        </Col>
      </Row>
      <TechnologiesWorked />
      <Row className='mt-5'>
        <h2 className='text-center'>Hobbies & Interests</h2>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={7}
          style={{
            padding: isMobile ? "0px 10px 0px" : "15px 0px 70px 70px",
            borderLeft: "2px solid rgb(83, 237, 106)"
          }}
        >
          <p style={paragraphStyle}>
            Outside of my professional life, I am an avid reader, immersing myself in books of different genres. Sci-fi movies and series are a passion of mine, as they inspire me and fuel my creativity. Additionally, I enjoy dedicating my free time to personal programming projects, where I can explore new technologies and further develop my skills.
          </p>
          <p style={paragraphStyle}>
            Thank you for visiting my portfolio. I am excited about the opportunity to contribute to innovative projects and be a part of cutting-edge teams. Let's create something amazing together!
          </p>
        </Col>
        <Col
          xs={12}
          sm={5}
          style={{
            padding: isMobile ? "0" : "80px",
            paddingTop: "15px"
          }}
        >
          <img src="assets/hobbies-interests.png" alt="Image" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMe
