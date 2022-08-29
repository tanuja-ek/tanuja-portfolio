import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import About from './Components/about';
import Main from './Components/main';
import Jobs from './Components/jobs';
import Work from './Components/work';
import Contact from './Components/contact';
import Email from './Components/email';
import Social from './Components/social';
import Projects from './Components/projects';



const App = () => {
  // const isHome = location.pathname === '/';
  // const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links

  const StyledMainContainer = styled.main`
  counter-reset: section;
`;

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledMainContainer>
        <GlobalStyle />
        <div className="App">
          <Header />
          <Email />
          <Social />
          <Main />
          <About />
          <Work />
          <Projects />
          <Contact />
        </div>
      </StyledMainContainer>
    </ThemeProvider>
  );
}

export default App;
