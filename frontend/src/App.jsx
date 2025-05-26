import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';
import Experience from './components/Experience';
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <div className="App">
            <Hero/>
            <Experience/>
            <hr className="section-divider"></hr>
            <Projects/>
            <Contact />
            <Footer/>
            <Analytics />
        </div>
    );
}

export default App;