import React from 'react';
import styled from 'styled-components';
import { navLinks } from '../config';
import { useState, useEffect } from 'react';
// import { Routes, Route, NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import variables from '../styles/variables';
import { useScrollDirection } from '../hooks';
import { loaderDelay } from '../utils/index';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Resume from '../static/Resume.pdf';

// import { useLocation } from 'react-router-dom';



const StyledHeader = styled.header`
${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  min-height : 100px;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

`;

const StyledNav = styled.nav`
${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  display : flex;
  justify-content : end;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
  .logo {
    a {
      color: #64ffda;
      width: 42px;
      height: 42px;
      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }
      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    display : flex;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        padding: 10px;
        font-size: 16px;
        color: #fff;
        text-decoration: unset;
        &:hover,
        &:focus {
          color: var(--green);
        }
        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: #64ffda;
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: 16px;
  }

  `;

const Header = (isHome) => {

  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  // const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    // if (prefersReducedMotion) {
    //   return;
    // }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const ResumeLink = (
    <a className="resume-button" href={Resume} target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <Router>
      <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
        {/* <FontAwesomeIcon icon="fa-solid fa-t" /> */}
        <span class='icon-letter-T'></span>
        <StyledNav>
          <>
            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                        <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                          <Link to={url} spy={true} smooth={true}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </StyledLinks>
          </>
        </StyledNav>
      </StyledHeader>
    </Router>
  )
}

export default Header;