import React from 'react'

//Top sections import
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';

//Main sections
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';

//Bottom sections
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/FAQS/FAQS';
import Contact from './sections/contact/contact';
import FloatingNav from './sections/floating-nav/floatingNav';
import Footer from './sections/footer/Footer';


const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App