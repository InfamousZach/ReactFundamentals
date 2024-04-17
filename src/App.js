    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.css';
    import './App.css';

    import Footer from './Components/Site/Footer';
     import Header from './Components/Site/Header';
     import Sidebar from './Components/Site/Sidebar';
    
     import {
      BrowserRouter as Router
    } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
