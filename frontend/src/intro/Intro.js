import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { PortfolioProvider } from './context/context';
import { heroData, aboutData, projectsData, contactData, footerData } from './mock/data';
import { Helmet } from 'react-helmet';
import { headData } from './mock/data';
// import './style/main.scss'

const Intro = () => {

    const [hero, setHero] = useState({});
    const [about, setAbout] = useState({});
    const [projects, setProjects] = useState([]);
    const [contact, setContact] = useState({});
    const [footer, setFooter] = useState({});
    const { title, lang, description } = headData;

    useEffect(() => {
        setHero({ ...heroData });
        setAbout({ ...aboutData });
        setProjects([...projectsData]);
        setContact({ ...contactData });
        setFooter({ ...footerData });
      }, []);

return (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'MyPortfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'MyPortfolio'} />
    </Helmet>
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </PortfolioProvider>
</>
    
)
};

export default Intro