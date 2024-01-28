import React, { useState } from 'react';
import Header from './components/pages/Header/Header';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsNavCollapsed(true);
  };
  
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home handlePageChange={handlePageChange} />;
    }
  };

  return (
    <div>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isNavCollapsed={isNavCollapsed}
        setIsNavCollapsed={setIsNavCollapsed}
      />
      <TransitionGroup>
        <CSSTransition key={currentPage} classNames="fade" timeout={1000}>
          <main id="main-content">
            {renderPage()}
          </main>
        </CSSTransition>
      </TransitionGroup>
      <Footer handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;