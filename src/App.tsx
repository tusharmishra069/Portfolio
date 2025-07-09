import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IconScroll from './components/IconScroll';
import WorkEducation from './components/WorkEducation';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

type PageType = 'home' | 'projects' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <IconScroll />
            <WorkEducation />
            <FeaturedProjects onViewMore={() => setCurrentPage('projects')} />
          </>
        );
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <CustomCursor />
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="bg-black text-white min-h-screen">
          <Header
            currentPage={currentPage}
            onNavigate={(page) => setCurrentPage(page as PageType)}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <main>
            {renderPage()}
          </main>
          <Footer />
          <Chatbot />
        </div>
      </div>
    </>
  );
}

export default App;