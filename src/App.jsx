import { BrowserRouter } from "react-router-dom";

import {Contact, Profile, About, Experience, Education, Hero, Navbar, Tech, Project, Research, StarsCanvas, Content, Footer, ShootingStars } from "./components";

const App = () => {

  return (
    <div>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <ShootingStars />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Content />
        <About />
        <Education />
        <Project />
        <Experience />
        <Research />
        <Profile/>
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
