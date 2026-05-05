import { Contact, Profile, About, Achievement, Experience, Education, Hero, Navbar, Tech, Project, Research, StarsCanvas, Content, Footer } from "./components";
import NetworkCanvas from "./components/NetworkCanvas";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <div className='relative z-0'>
      <NetworkCanvas />
      <div>
        <Navbar />
        <Hero />
      </div>
      <Content />
      <About />
      <Education />
      <Project />
      <Experience />
      <Research />
      <Achievement />
      <Profile />
      <Tech />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default App;
