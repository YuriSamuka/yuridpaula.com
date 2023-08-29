import React, { useState } from 'react'
import { NavbarBrand, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import { Link as ScrollLink } from 'react-scroll'



const Navigation = ({ active, setActive, scrollToSection }) => {
  const [hovered, sethovered] = useState(null)

  const handleMouseEnter = (el) => {
    sethovered(el)
  }

  const handleMouseLeave = () => {
    sethovered(null)
  }

  const brandLogoStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    padding: "5px 19px",
    textDecoration: "none",
    color: hovered === 'brandLogo' ? '#ffff' : '#333333',
    backgroundColor: hovered === 'brandLogo' ? '#6c757d' : 'inherit',
    borderBottom: hovered === 'brandLogo' ? "5px solid #333333" : 'inherit',
    borderRight: hovered === 'brandLogo' ? "5px solid #333333" : 'inherit',
    borderTop: hovered === 'brandLogo' ? 'inherit' : "5px solid #333333",
    borderLeft: hovered === 'brandLogo' ? 'inherit' : "5px solid #333333",
    transition: `opacity 1s ease 3s, border-color 0.5s ease-in-out, color 0.5s ease-in-out`,
  }

  const linkStyle = {
    textDecoration: "none",
    color: "#333333",
    padding: "20px",
  }

  const menuItens = ['Home', 'Portfolio', 'About', 'Resume', 'Contact']

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="mx-3" style={{ marginRight: "30px" }}>
          <Link
            onMouseEnter={() => handleMouseEnter('brandLogo')}
            onMouseLeave={handleMouseLeave}
            to="/"
            style={brandLogoStyle}
          >
            Y
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuItens.map(e => (
              <Link
                key={e}
                style={{
                  ...linkStyle,
                  color: hovered === e.toLowerCase() ? "#6c757d" : "#333333",
                  fontWeight: active === e.toLowerCase() ? "bold" : "normal",
                }}
                className={`mx-3 ${active === e.toLowerCase() ? 'active' : ''}`}
                to={e === 'Home' ? '/' : `#${e.toLowerCase()}`}
                onClick={() => {
                  scrollToSection(e.toLowerCase())
                  setActive(e.toLowerCase())
                }}
                onMouseEnter={() => handleMouseEnter(e.toLowerCase())}
                onMouseLeave={handleMouseLeave}
              >
                {e}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default Navigation

