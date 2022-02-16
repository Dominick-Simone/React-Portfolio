import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Home from "./pages/Home"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') return <Home />;
    if (currentPage === 'About') return <About />;
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}
