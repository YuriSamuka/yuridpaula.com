import React, { useState } from 'react';
import { Row, Col, Container, Button, Form, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isInvalid, setIsInvalid] = useState({
    name: false,
    email: false,
    message: false,
  })

  const fadeInStyle = {
    opacity: 1
  }

  const buttonStyle = {
    ...fadeInStyle,
    padding: "15px",
    fontWeight: "bold",
    marginRight: "18px",
    borderRadius: 0
  }

  const inputStyle = {
    borderRadius: '0',
    marginBottom: '20px'
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleBlur = e => {
    setTouched({
      ...touched,
      [e.target.id]: true,
    });
    setIsInvalid({
      ...isInvalid,
      [e.target.id]: false,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Boolean(formData.name) || !Boolean(formData.email) || !Boolean(formData.message)) {
      setIsInvalid({
        name: !Boolean(formData.name),
        email: !Boolean(formData.email),
        message: !Boolean(formData.message)
      })
      return
    }
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await fetch('https://f8ioyesp8l.execute-api.us-east-1.amazonaws.com/dev/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again later.');
      }

      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setIsInvalid({ name: false, email: false, message: false })
      setSuccess('Your message has been sent successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className='mb-5'>
      <Row className='mb-5 mt-5'>
        <Col>
          <h1 className="px-3 mt-4" style={{ borderLeft: "2px solid rgb(83, 237, 106)" }}>
            Contact
          </h1>
        </Col>
      </Row>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Row style={{ borderRight: "2px solid rgb(83, 237, 106)" }}>
        <Col md={6}>
          <Form noValidate>
            <Form.Group controlId="name">
              <Form.Control
                style={inputStyle}
                type="text"
                placeholder="Enter your name"
                required value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={(touched.name && formData.name === "") || isInvalid.name}
              />
              <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control
                style={inputStyle}
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={(touched.email && formData.email === "") || isInvalid.email}
              />
              <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Control
                style={inputStyle}
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                required value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={(touched.message && formData.message === "") || isInvalid.message}
              />
              <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            </Form.Group>

            <Button variant="outline-secondary" onClick={handleSubmit} style={buttonStyle} disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send message'}
              <FontAwesomeIcon icon={faPaperPlane} style={{ verticalAlign: 'middle' }} className="ms-2" />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
