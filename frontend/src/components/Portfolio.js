import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Container } from 'react-bootstrap';
import PortfolioProject from './PortfolioProject'


const Portfolio = () => {

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const PortfolioSectionStyle = {
    borderLeft: "2px solid rgb(83, 237, 106)"
  }

  const projects = [
    {
      title: "Digital Menu with AI eWaiter",
      carouselImages: [
        { imgUrl: "assets/portfolio/Digital_Menu_with_AI_eWaiter/Digital_Menu_with_AI_eWaiter05.jpg" },
        { imgUrl: "assets/portfolio/Digital_Menu_with_AI_eWaiter/Digital_Menu_with_AI_eWaiter03.jpg" },
        { imgUrl: "assets/portfolio/Digital_Menu_with_AI_eWaiter/Digital_Menu_with_AI_eWaiter02.jpg" },
        { imgUrl: "assets/portfolio/Digital_Menu_with_AI_eWaiter/Digital_Menu_with_AI_eWaiter01.jpg" }
      ],
      description: "Introducing the Digital Menu with AI eWaiter! Our project transforms restaurant menus and enhances the dining experience. With our innovative solution, restaurants can digitize their menus, replacing traditional paper menus. Our AI-powered eWaiter provides personalized recommendations, takes orders, and offers instant assistance. Customers can easily explore the interactive digital menu, customize their orders, and make special requests. The AI eWaiter ensures seamless order transmission to the kitchen, minimizing errors and expediting service. With additional features like highlights showcasing specials and real-time chat support, the Digital Menu with AI eWaiter elevates restaurant efficiency and customer satisfaction. Embrace the future of dining with our project!",
      technologies: [
        "TypeScript",
        "React",
        "Redux",
        "Objection.js",
        "PostgreSQL",
        "Node.js",
        "Express"
      ],
      projectLinks: {
        demo: "https://example.com/demo",
        code: "https://github.com/YuriSamuka/digital-menu-with-AI-ewaiter",
        presentation: "https://example.com/presentation"
      }
    },
    {
      title: "Guiageeks",
      carouselImages: [
        { imgUrl: "assets/portfolio/guiageeks/guiageeks_art_work05.jpg" },
        { imgUrl: "assets/portfolio/guiageeks/guiageeks_art_work01.jpg" },
        { imgUrl: "assets/portfolio/guiageeks/guiageeks_art_work02.jpg" },
        { imgUrl: "assets/portfolio/guiageeks/guiageeks_art_work03.jpg" },
        { imgUrl: "assets/portfolio/guiageeks/guiageeks_art_work04.jpg" },
      ],
      description: "Introducing Guiageeks: Your Ultimate Geek Entertainment Companion! A platform for tracking and bookmarking geek-oriented entertainment content. The idea is to create a platform where users can add their favorite geek content (manga/anime/comics, etc.) - what they're currently reading, have read, or want to read. Additionally, the platform functions as a social network where users can interact and share their experiences. Curate your personalized library of must-reads, from manga and anime to comics and more. Connect with like-minded geeks, engage in lively discussions, and discover hidden gems recommended by fellow enthusiasts. With Guiageeks, immerse yourself in a world where entertainment knows no bounds. Join the movement, unlock new realms, and embrace your inner geek. Guiageeks awaits you!",
      technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Kitsu API"],
      projectLinks: {
        demo: "https://example.com/demo",
        code: "https://github.com/YuriSamuka/guiageeks",
        presentation: "https://example.com/presentation"
      }
    },
  ];

  return (
    <Container>
      <h1 className="px-3 my-4" style={PortfolioSectionStyle}>My portfolio</h1>
      {projects.map(e => <PortfolioProject
        projectTitle={e.title}
        carouselImages={e.carouselImages}
        description={e.description}
        tecnologies={e.technologies}
        projectLinks={e.projectLinks}
      />)}
    </Container>
  )
}

export default Portfolio