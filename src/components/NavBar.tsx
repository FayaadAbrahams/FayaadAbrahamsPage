import { useEffect } from 'react';
import '../assets/index.scss';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { completeBouncing, setDarkMode, startBouncing, toggleIcon } from '../store/themeSlice';


const NavBar = () => {
  // const [darkModeState, setDarkModeState] = useState(true);
  // const [isBouncing, setIsBouncing] = useState(false);
  // const [showingIcon, setShowingIcon] = useState(true);
  // const { darkMode, isBouncing, showingIcon } = useSelector((state: any) => state.theme);
  const darkMode = useSelector((state: any) => state.theme.darkMode);
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
    dispatch(startBouncing());

    setTimeout(() => {
      dispatch(darkMode);
    }, 400);

    setTimeout(() => {
      // setDarkModeState(!darkMode);
      // setShowingIcon(!darkMode);
      // setIsBouncing(false);

      dispatch(setDarkMode(true));
      dispatch(toggleIcon(darkMode));
      dispatch(completeBouncing());
    }, 800);
  };

  const getIcon = () => {
    if (dispatch()) {
      return showingIcon ? <SunnyIcon className="dark-mode-icon" /> : <BedtimeIcon className="dark-mode-icon" />;
    }
    return darkMode ? <SunnyIcon className="dark-mode-icon" /> : <BedtimeIcon className="dark-mode-icon" />;
  };
  return (
    <>
      < nav className="nav-bar">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
