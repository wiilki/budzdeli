// App.js
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

  // Define a mapping between page names and components
  const pageComponents = {
    Home: <Home handlePageChange={handlePageChange} />,
    About: <About />,
    Contact: <Contact />,
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
            {pageComponents[currentPage]}
          </main>
        </CSSTransition>
      </TransitionGroup>
      <Footer handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
