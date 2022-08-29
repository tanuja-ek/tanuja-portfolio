import React, { useEffect, useRef } from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '../config';
import profileImage  from '../Images/tanuProfile.png';
// import sr from '@utils/sr';
// import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    text-align: left;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
    const revealContainer = useRef(null);
    //   const prefersReducedMotion = usePrefersReducedMotion();

    //   useEffect(() => {
    //     if (prefersReducedMotion) {
    //       return;
    //     }

    //     sr.reveal(revealContainer.current, srConfig());
    //   }, []);

    const skills = ['React' , 'JavaScript (ES6+)', 'TypeScript', 'Bootstrap','jQuery', 'Node.js', 'WordPress', 'HTML', 'CSS', 'Material UI', 'Sketch' , 'Zeplin'];

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading"> About Me</h2>
            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hello! My name is Tanuja and I enjoy creating web applications. I would best describe myself as a Proactive ,  flexible and enthusiastic person who works well with others. 

                             I am an UI developer with 6+ years of work experience managing the front-end activities and building modern-day UI components to improvise the application performance. 
                        </p>

                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at{' '}
                            <a href="https://purpletalk.com/">a start-up</a>{' '}
                           
                           . My
                            main focus these days is building accessible, inclusive products and digital
                            experiences  for a variety of clients.
                        </p>

                        <p>
                           
                        </p>

                        <p>Here are a few technologies I’ve been working with recently:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <img src={profileImage} className="img" width={500} quality={95} />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
