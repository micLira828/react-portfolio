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
/*import { useEffect } from 'react';
import Computer from './sections/computer/Computer';
//import $ from 'jquery';
//import FloatingNav from './sections/floating-nav/FloatingNav';*/



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
const {themeState} = useThemeContext();
  return (
    <>
    {/*<Computer/>*/}
    <main className = {`${themeState.primary} ${themeState.background}`}>
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
    </main>
    </>
  )
}

export default App