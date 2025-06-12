import { useEffect, useState } from 'react';
import './index.scss';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const NavBar = () => {
  const [darkModeState, setDarkModeState] = useState(true);
  const [isBouncing, setIsBouncing] = useState(false);
  const [showingIcon, setShowingIcon] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkModeState) {
      root.classList.remove('light-mode');
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
      root.classList.add('light-mode');
    }
  }, [darkModeState]);

  const toggleDarkMode = () => {
    setIsBouncing(true);

    setTimeout(() => {
      setShowingIcon(!darkModeState);
    }, 400);

    setTimeout(() => {
      setDarkModeState(!darkModeState);
      setShowingIcon(!darkModeState);
      setIsBouncing(false);
    }, 800);
  };
  const getIcon = () => {
    if (isBouncing) {
      return showingIcon ? <SunnyIcon className="dark-mode-icon" /> : <BedtimeIcon className="dark-mode-icon" />;
    }
    return darkModeState ? <SunnyIcon className="dark-mode-icon" /> : <BedtimeIcon className="dark-mode-icon" />;
  };
  return (
    <>
      < nav className="nav-bar">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="dark-mode-btn" onClick={toggleDarkMode} aria-label='Light/Dark Mode Button' >
              <div className={isBouncing ? 'animate-bounce' : ''}>
                {getIcon()}
              </div>
            </button></li>
        </ul>
      </nav>


    </>
  )
}

export default NavBar;
