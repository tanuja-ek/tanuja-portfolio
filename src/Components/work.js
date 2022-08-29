import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

// import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '../config';
// import { KEY_CODES } from '@utils';
// import sr from '@utils/sr';
// import { usePrefersReducedMotion } from '@hooks';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const STabs = styled(Tabs)`
//   font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  width: 100%;
  display: flex;
`;

const STabList = styled(TabList)`
position: relative;
z-index: 3;
width: max-content;
padding: 0;
margin: 0;
list-style: none;

@media (max-width: 600px) {
  display: flex;
  overflow-x: auto;
  width: calc(100% + 100px);
  padding-left: 50px;
  margin-left: -50px;
  margin-bottom: 30px;
}
@media (max-width: 480px) {
  width: calc(100% + 50px);
  padding-left: 25px;
  margin-left: -25px;
}

li {
  &:first-of-type {
    @media (max-width: 600px) {
      margin-left: 50px;
    }
    @media (max-width: 480px) {
      margin-left: 25px;
    }
  }
  &:last-of-type {
    @media (max-width: 600px) {
      padding-right: 50px;
    }
    @media (max-width: 480px) {
      padding-right: 25px;
    }
  }
}
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
${({ theme }) => theme.mixins.link};
display: flex;
align-items: center;
width: 100%;
height: var(--tab-height);
padding: 0 20px 2px;
border-left: 2px solid var(--lightest-navy);
background-color: transparent;
color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
font-family: var(--font-mono);
font-size: 14px;
text-align: left;
white-space: nowrap;

@media (max-width: 768px) {
  padding: 0 15px 2px;
}
@media (max-width: 600px) {
  ${({ theme }) => theme.mixins.flexCenter};
  min-width: 120px;
  padding: 0 15px;
  border-left: 0;
  border-bottom: 2px solid var(--lightest-navy);
  text-align: center;
}

&:hover,
&:focus {
  background-color: var(--light-navy);
    color: var(--green);
    border-left: 2px solid var(--green);
}
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
position: relative;
width: 100%;
margin-left: 20px;
width: 100%;
height: auto;
text-align: left;

ul {
  ${({ theme }) => theme.mixins.fancyList};
  margin-top : 15px;
  font-size : 16px;
  li{
    span{
      color: var(--green);
    }
  }
}

h3 {
  margin-bottom: 2px;
  font-size: var(--fz-xxl);
  font-weight: 500;
  line-height: 1.3;
}
.company {
    color: var(--green);
  }

.range {
  margin-bottom: 25px;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
}

@media (max-width: 600px) {
  margin-left: 0;
}
`;
STabPanel.tabsRole = 'TabPanel';



const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;




const StyledTabButton = styled(Tabs)`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus, 
  &:active {
    background-color: var(--light-navy);
  }
  .is-selected{
    color : var(--green)
  }
`;
StyledTabButton.tabsRole = 'Tabs';


const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;



;

const Work = () => {


    // const jobsData = data.jobs.edges;

    // const [activeTabId, setActiveTabId] = useState(0);
    // const [tabFocus, setTabFocus] = useState(null);
    // const tabs = useRef([]);
    // const revealContainer = useRef(null);
    // const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <StyledJobsSection id="jobs">
            <h2 className="numbered-heading"> Where I’ve Worked</h2>

            <div className="inner">

                <STabs
                    selectedTabClassName='is-selected'
                    selectedTabPanelClassName='is-selected'
                >
                    <STabList>
                        <STab>Purple Talk</STab>
                        <STab>Alpine Code</STab>
                        <STab>CloudTern Solutions</STab>
                        {/* <StyledHighlight /> */}
                    </STabList>
                    <div>
                        <STabPanel>
                            <div className="panel-content">
                                <h2>
                                   Software Analyst
                                    <span className='company'> @ PurpleTalk</span>
                                </h2>
                                <p className='range'>Jan 2018 - Aug 2021</p>
                                <ul>
                                    <li>  Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                                    <li>  Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Redux, HTML,CSS, WordPress</li>
                                    <li> Worked with a team of designers, QA engineers, backend developers and other product management experts collaboratively to deliver the quality applications. </li>
                                    <li> Used <span>JIRA</span> as a Bug Tracking System to maintain history of bugs/issues on an everyday basis</li>
                                    <li>Involved in database activities like designing tables, queries in the application to fetch data from <span>MySQL</span> database</li>
                                    <li>Sound Knowledge on <span>React Hooks</span> and Functional Components.</li>
                                    <li>Have worked on <span>WordPress</span> themes and Plugins and built a brand-new website named Yesgnome.</li>
                                    <li>Implemented React-Router, React Redux Architecture, ES6, web pack and various node modules.</li>
                                    <li>Developed client-side validation code using <span>JavaScript</span> and <span>JQuery</span></li>
                                </ul>
                            </div>
                        </STabPanel>
                        <STabPanel>  <div className="panel-content">
                            <h2>Freelancer @ AlpineCode</h2>
                            <span>Jan 2018 - Aug 2021</span>
                            <ul>
                                <li>  Worked as UI Developer Freelancer for clients Sunpro, Dell Technologies Race to Attach, Web Token.</li>
                                <li> Developed several web pages and components using HTML5, CSS3, Bootstrap5, JavaScript as per client’s requirement.</li>
                                <li> Support for production releases scheduled after office hours.</li>
                                <li>Developing new and customization of the existing features.</li>
                                <li>Closely worked with Backend Developers and Designer to validate website requirements.</li>
                                <li>Have Experience in CSS and React Animations</li>
                                <li>Made sure that the website is fully responsive which supports in mobiles, laptops, desktops</li>
                            </ul>
                        </div></STabPanel>
                        <STabPanel>
                            <div className="panel-content">
                                <h2>Intern @ CloudTern</h2>
                                <span>Jan 2018 - Aug 2021</span>
                                <ul>
                                    <li> Build websites using WordPress. Experienced in SEO and marketing relating strategies.</li>
                                    <li>Developed small projects UI interfaces using HTML, CSS, Bootstrap, Sketch in VSC Editor</li>
                                    <li> Familiar with CMS platforms like WordPress and Shopify and build a website Cleanse High using Shopify</li>
                                    <li> Worked with Senior developers to manage large, complex design projects.</li>
                                </ul>
                            </div>
                        </STabPanel>
                    </div>
                </STabs>
            </div>


        </StyledJobsSection>
    );
};

export default Work;
