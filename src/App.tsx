import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Provider } from 'react-redux';
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;