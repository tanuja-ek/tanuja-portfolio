import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '../config';
import { Link } from 'react-scroll';
import Linkedin from '../Images/linkedin.svg';
import {  email } from '../config';

// import { Side } from './social';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  position: fixed;
  left: 20px;
  bottom: 20px;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
ul{
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  li{
    margin-bottom: 10px;
  }
}
  a {
    margin: 0px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: 16px;
    line-height: var(--fz-lg);
    // letter-spacing: 0.1em;
    // writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Social = ({ }) => (
  <>
    <StyledLinkWrapper>
      <ul>
        <li>
          <a href="https://twitter.com/tanujaerukulla"  target="_blank" rel="noreferrer"><span className='icon-twitter-brands' ></span></a>
        </li>
        <li>
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer"><span className='icon-envelope-solid' ></span></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tanuja-erukulla/" target="_blank" rel="noreferrer"><span className='icon-linkedin' ></span></a>
        </li>
       
      </ul>
    </StyledLinkWrapper>
  </>
);



export default Social;
