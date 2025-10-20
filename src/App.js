import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import { useScripts } from './hooks/useScripts';
import { useAOS } from './hooks/useAOS';
import Header from './components/header';
import Jumbo from './components/jumbo';
import Cases from './components/cases';
import About from './components/about';
import Service from './components/service';
import Org from './components/org';
import Num from './components/num';
import Testimonial from './components/testimonial';
import Team from './components/team';
import Blog from './components/blog';
import Join from './components/join';
import Footer from './components/footer';


function App() {
  useScripts();
  useAOS();

  return (
    <>
      <button id="topBtn"><i className="fas fa-arrow-up"></i></button>
      <div className="hero__banner-two">
        <Header />
        <Jumbo />
      </div>
      <Cases />
      <About />
      <Service />
      <Org />
      <Num />
      <Testimonial />
      <Blog />
      <Join />
      <Footer />
    </>
  );
}

export default App;
