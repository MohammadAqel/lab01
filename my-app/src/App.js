import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/header';
import Footer from './Component/footer';
import Main from './Component/main';

function App(){

    return (
      <div>
        <Header/>
        <Main />
        <Footer />
      </div>
    );
  }

export default App;