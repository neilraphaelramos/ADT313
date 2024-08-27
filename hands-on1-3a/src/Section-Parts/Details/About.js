import React from 'react';
import './About.css';

const About = ({ firstname, lastname, description, imageSrc, section }) => {
    return (
        <section id="about">
            <img src={imageSrc} />
            <h2>About Me</h2>
            <p>Hi, I'm <span>{firstname}</span> <span>{lastname}</span>, {description}</p>
            <p>From {section} on Dr. Yanga College Inc.</p>
        </section>
    );
}

export default About;
