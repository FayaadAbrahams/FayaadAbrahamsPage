import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Provider } from 'react-redux';
import store from "./store/store";
import { useEffect, useState } from 'react';
import "./assets/index.scss";

function App() {
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--x', (e.clientX + window.scrollX) + 'px');
            document.documentElement.style.setProperty('--y', (e.clientY + window.scrollY) + 'px');
        };

        const handleMouseDown = () => {
            setIsClicked(true);
        };

        const handleMouseUp = () => {
            setIsClicked(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'none';

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            <div className={`cursor ${isClicked ? 'cursor-clicked' : ''}`}></div >
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>
            </Provider>
        </>
    );
}

export default App;