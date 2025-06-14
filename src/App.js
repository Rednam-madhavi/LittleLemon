import React from 'react';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;
