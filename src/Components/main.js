import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
// import { navDelay, loaderDelay } from '@utils';
// import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }
.active-link{
  color : var(--green);
}
  p {
    margin: 20px 0 0;
    max-width: 540px;
    text-align: left;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  // const prefersReducedMotion = usePrefersReducedMotion();

  // useEffect(() => {
  //   if (prefersReducedMotion) {
  //     return;
  //   }

  //   const timeout = setTimeout(() => setIsMounted(true), navDelay);
  //   return () => clearTimeout(timeout);
  // }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Tanuja Erukulla.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <>
      <p>
        I’m a software engineer specialized in creating high-end, effective and beautiful web applications.
        I have proven ability to build efficient front-end user interfaces in line with modern best practices. My Last company I have worked with is {' '}  
        <a href="https://purpletalk.com/" target="_blank" rel="noreferrer" className='active-link'>
           PurpleTalk
        </a>
      </p>
    </>
  );
 

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
      <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      </TransitionGroup>

    </StyledHeroSection>
  );
};

export default Hero;
