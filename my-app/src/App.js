import React from 'react';
import Header from './Component/header';
import Footer from './Component/footer';
import Main from './Component/main';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main />
        <Footer />
      </div>
    )
  }
}
export default App;