import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Footer from './components/footer';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  return (
    <div>
      <div className="funden-page-loading"></div>
      <Main />
      <Footer />
      <div className="return-top default"><FaArrowUp /></div>
      <div id="gva-overlay"></div>
    </div>
  );
}

export default App;
