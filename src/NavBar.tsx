import { useState } from 'react';
import './index.css';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const NavBar = () => {
  const [darkModeState, setDarkModeState] = useState(true);
  const [isBouncing, setIsBouncing] = useState(false);

  const toggleDarkMode = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false)
      setDarkModeState(!darkModeState);
    }, 800);
  };

  var icon = darkModeState ? <SunnyIcon className={`dark-mode-icon ${isBouncing ? 'bounce2' : ''}`} />
    : <BedtimeIcon className={`dark-mode-icon ${isBouncing ? 'bounce2' : ''}`} />;

  return (
    <>
      < nav className="nav-bar">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a onClick={toggleDarkMode}>{icon}</a></li>
        </ul>
      </nav>


    </>
  )
}

export default NavBar;
