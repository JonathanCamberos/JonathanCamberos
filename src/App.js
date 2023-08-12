
import React, { useEffect, useState } from 'react'

import Navbar from "./components/navbar/Navbar"
import Banner from "./components/banner/Banner"
import Features from "./components/features/Features"
import Projects from "./components/projects/Projects"
import Resume from "./components/resume/Resume"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import FooterBottom from './components/footer/FooterBottom'
import Experience from "./components/experience/Experience"

import WaterDropGrid from './components/banner/WaterDropGrid'



function App() {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    if(theme){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const darkToggle = () => {
    setTheme(!theme);
  }
  
  const moonClick = () => {
    darkToggle();
  }

  return (
    <div className="w-full h-auto bg-bodyColor dark:bg-white 
    text-lightText">
      <div>
      
        

        
        <Navbar theme={theme} moonClick={moonClick} />

        <div className='dark:bg-gradient-to-t dark:from-indigo-200'>
          <div className="lgl:max-w-screen-2xl lgl:px-16 max-w-screen-xl mx-auto">
            <Banner theme={theme}/>
          </div> 
        </div>
        
        <div className="lgl:max-w-screen-2xl lgl:px-16 max-w-screen-xl mx-auto">
          
          {/* <WaterDropGrid /> */}
          <Features />
          <Experience />
          <Projects />
          <Resume/>
          <Contact />
          <Footer />
          <FooterBottom />
        </div>

      </div>
    </div> 



  
  );
}

export default App;


// <div>
// <div className="sticky w-full h-auto bg-bodyColor dark:bg-white 
//   text-lightText px-4">

//   <Navbar theme={theme} moonClick={moonClick} />

// </div>

// <div>
//   <div className="w-full h-auto bg-bodyColor dark:bg-white 
//     text-lightText dark:bg-gradient-to-t from-indigo-200">


//     <div className="w-full h-auto text-lightText px-4">
//         <div className="lgl:max-w-screen-2xl lgl:px-16 max-w-screen-xl mx-auto">
//           <Banner/>
//         </div>
//     </div>
//   </div>
// </div>



//regular
{/* <div>
<div className="w-full h-auto bg-bodyColor dark:bg-white 
  text-lightText px-4">
  <Navbar theme={theme} moonClick={moonClick} />
  
  <div className='lgl:max-w-screen-2xl lgl:px-16 max-w-screen-xl mx-auto
  dark:bg-gradient-to-t from-indigo-200'> 
      <Banner/>
  </div>
  
  <div className="lgl:max-w-screen-2xl lgl:px-16 max-w-screen-xl mx-auto">
    <Features />
    <Experience />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
    <FooterBottom />
  
  </div>
</div>
</div> */}