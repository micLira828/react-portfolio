import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/FAQS/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import FloatingNav from './sections/floating-nav/FloatingNav';
import {useRef, useState, useEffect} from 'react';
/*import { useEffect } from 'react';
import Computer from './sections/computer/Computer';
//import $ from 'jquery';
*/



const App = () => {

 /* useEffect(() => {
   
    $('#rightCircle').hide();
     $('#leftCircle').hide();
     $('#middleCircle').hide();
     $('#mouse_pointer').hide();
     $('.ball').hide();
     $('main').hide();
    

   $('#EllipseNonGradient').click(
     function(e){
       
      $('#mouse_pointer').fadeIn(1000, function(){
         $('.clickMe').fadeOut(1000, function(){
            
             $('#leftCircle').fadeIn(1000,function(){
             $('#middleCircle').fadeIn(1000, function(){
             $('#rightCircle').fadeIn(1000, function(){
              $('#computerAnimation').slideUp(2000, function(){
                $('main').slideDown(3500);
              });
              
            
             });
           });
           });
      })
     });
   
   });
});*/
const mainRef = useRef();
const {themeState} = useThemeContext();
const [showFloatingNav, setShowFloatingNav] =  useState(true);
const [siteYposition, setSiteYPosition] = useState(0);

const showFloatingNavHandler = () =>{
  setShowFloatingNav(true);
}

const hideFloatingNavHandler = () =>{
  setShowFloatingNav(false);
}

const floatingNavToggleHandler = () =>{
  if (siteYposition < mainRef?.current?.getBoundingClientRect().y - 20 ||siteYposition > mainRef?.current?.getBoundingClientRect().y + 20  ){
    showFloatingNavHandler();
  }
  else{
    hideFloatingNavHandler();
  }

  setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
}

useEffect(() => {
  const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
  return () => clearInterval(checkYPosition);
}, [siteYposition])
  return (
    <>
    {/*<Computer/>*/}
    <main className = {`${themeState.primary} ${themeState.background}` } ref={mainRef}>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <FAQs/>
        <Contact/>
        <Footer/>
      <Theme/>
      {showFloatingNav && <FloatingNav/>}
    </main>
    </>
  )
}

export default App