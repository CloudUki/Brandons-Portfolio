import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/contact';
import './App.css';
import Experience from './components/Experience';

function App() {
    return (
        <div className="App">
            <Hero/>
            <Experience/>
            <hr className="section-divider"></hr>
            <Projects/>
            <Contact />
            <Footer/>
        </div>
    );
}

export default App;