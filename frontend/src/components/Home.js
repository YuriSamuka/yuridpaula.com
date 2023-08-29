import React from 'react';
import { useInView } from 'react-intersection-observer'
import { Button } from 'reactstrap'
import useIsMobile from '../custom-hooks/useIsMobile'


function Home() {

    const isMobile = useIsMobile()

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const fadeInStyle = {
        opacity: inView ? 1 : 0
    }

    const mainDivStyle = {
        isplay: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: `${window.innerHeight}px`,
        display: "flex"
    }

    const h2Style = {
        fontSize: isMobile ? "1.8rem" : "4rem",
        fontWeight: "700",
        color: "#333333",
        paddingLeft: "20px",
        paddingRight: "20px",
    }

    const h1Style = {
        fontSize: isMobile ? "3rem" : "7rem",
        color: "#53ed6a",
        textAlign: "left",
        paddingLeft: "20px",
        paddingRight: "20px",
    }

    const buttonStyle = {
        ...fadeInStyle,
        padding: "15px",
        fontSize: "1.3rem",
        fontWeight: "bold",
        borderRadius: 0
    }

    const getRandomDelay = () => Math.round((Math.random() * (0.6 - 0.1) + 0.1) * 10) / 10

    return (
        <div style={mainDivStyle}>
            <div ref={ref} className="mt-3" style={{}} >
                <h2 style={{
                    ...h2Style,
                    ...fadeInStyle,
                    transition: `opacity 1s ease ${getRandomDelay()}s`
                }}>
                    Hello, My name is
                </h2>
                <h1 style={{
                    ...h1Style,
                    ...fadeInStyle,
                    transition: `opacity 1s ease ${getRandomDelay()}s`
                }}
                >
                    Yuri Samuel.
                </h1>
                <h2 style={{
                    ...h2Style,
                    ...fadeInStyle,
                    transition: `opacity 1s ease ${getRandomDelay()}s`
                }} >
                    I'm a software engineer.
                </h2>
                <div className="mt-3">
                    <Button
                        href="#portfolio"
                        size="lg"
                        outline
                        style={{
                            ...buttonStyle,
                            margin: isMobile ? "0px 16px 10px" : "0 25px",
                            transition: `opacity 1s ease ${getRandomDelay()}s, border-color 0.5s ease-in-out, color 0.5s ease-in-out`
                        }} >
                        View My Portfolio
                    </Button>
                    <Button
                        size="lg"
                        outline
                        href="mailto:yurisamuka@hotmail.com"
                        style={{
                            ...buttonStyle,
                            margin: isMobile ? "0px 16px 10px" : "0",
                            transition: `opacity 1s ease ${getRandomDelay()}s, border-color 0.5s ease-in-out, color 0.5s ease-in-out`
                        }} >
                        Get in touch
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;