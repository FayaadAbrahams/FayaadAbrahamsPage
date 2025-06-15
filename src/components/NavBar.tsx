import { useEffect } from 'react';
import '../assets/index.scss';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { completeBouncing, startBouncing } from '../store/themeSlice';


const NavBar = () => {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  const isBouncing = useSelector((state: any) => state.theme.isBouncing);
  const showingIcon = useSelector((state: any) => state.theme.showingIcon);
  const dispatch = useDispatch();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.remove('light-mode');
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
      root.classList.add('light-mode');
    }
  }, [darkMode]);


  const toggleDarkMode = () => {
    if (isBouncing) return;

    dispatch(startBouncing());

    setTimeout(() => {
      dispatch(completeBouncing());
    }, 800);
  };

  const getIcon = () => {
    if (isBouncing) {
      return showingIcon ? <SunnyIcon className="dark-mode-icon" /> : <BedtimeIcon className="dark-mode-icon" />;
    }
    return darkMode ? <SunnyIcon className="dark-mode-icon" /> : <BedtimeIcon className="dark-mode-icon" />;
  };

  return (
    <>
      < nav className="nav-bar non-select">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
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
