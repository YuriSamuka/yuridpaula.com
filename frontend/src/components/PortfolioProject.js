import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCode, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Button, Row } from 'react-bootstrap';

const PortfolioProject = ({ projectTitle, carouselImages, description, tecnologies, projectLinks }) => {

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

    const RecipixStyle = {
        borderRight: "2px solid rgb(83, 237, 106)"
    }

    return (
        <Row className='mb-5'>
            <h2 className="text-center mb-4" style={RecipixStyle}>{projectTitle}</h2>
            <Carousel className='mb-4'>
                {carouselImages.map(e => (
                    <Carousel.Item key={e.imgUrl}>
                        <img
                            className="d-block"
                            style={{ width: "45%", margin: "auto" }}
                            src={e.imgUrl}
                            alt={`${projectTitle}-screenshot-1`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <p style={{ fontSize: "110%", textAlign: "justify" }}>{description}</p>
            <p>
                <strong>Technologies</strong>: {tecnologies.join(', ')}.
            </p>
            <div className="project-links" style={RecipixStyle}>
                <Button variant="outline-secondary" href={projectLinks.demo} style={buttonStyle}>
                    Try demo
                    <FontAwesomeIcon icon={faLink} style={{ verticalAlign: "middle" }} className="ms-2" />
                </Button>
                <Button
                    variant="outline-secondary"
                    href={projectLinks.code}
                    style={buttonStyle}
                    target="_blank"
                >
                    View code
                    <FontAwesomeIcon icon={faCode} style={{ verticalAlign: "middle" }} className="ms-2" />
                </Button>
                {/* <Button variant="outline-secondary" href={projectLinks.presentation} style={buttonStyle}>
                    Watch presentation
                    <FontAwesomeIcon icon={faPlay} style={{ verticalAlign: "middle" }} className="ms-2" />
                </Button> */}
            </div>
        </Row>
    )
}

export default PortfolioProject