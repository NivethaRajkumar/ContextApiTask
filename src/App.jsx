import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';
import { ContextProvider } from './Context/ContextProvider'; // Ensure the path is correct

function App() {
  return (
    <ContextProvider>
      <div className="fixed-top">
        <Navbar />
        <Header />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center cardcss mt-5 pt-5">
        <Card />
      </div>
      <Footer />
    </ContextProvider>
  );
}

export default App;
