import resume from './assets/Brandon_Yang_Resume.pdf';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Footer from './components/Footer';
import Contact from './components/contact';
import './App.css';
import Experience from './components/Experience';

const openResume = () => {
    window.open(resume, '_blank');
};

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