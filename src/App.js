import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills1';
import Project from './Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Education/>
      <Skills/>
      <Project/>
      <footer className="App-footer">
        
        
      </footer>
    </div>
  );
}

export default App;
