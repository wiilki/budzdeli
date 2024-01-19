import React, { useState } from 'react';
import Header from './components/pages/Header/Header';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main id="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;