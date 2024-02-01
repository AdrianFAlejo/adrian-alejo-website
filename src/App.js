import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Main';
import Skills from './components/Skills'
import School from './components/School';
import Certs from './components/Certs';
import Footer from './components/Footer';
import WorkExp from './components/WorkExp';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'Adrian Alejo';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Home />
      <WorkExp />
      <School />
      <Skills />
      <Certs />
      <Footer />
    </div>
  );
}

export default App;
