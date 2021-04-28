import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/header';
import Footer from './Component/footer';
import Main from './Component/main';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }


}

export default App;
