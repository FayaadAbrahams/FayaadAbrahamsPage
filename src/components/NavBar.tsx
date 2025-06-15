import { useEffect } from 'react';
import '../assets/index.scss';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { completeBouncing, startBouncing, setCurrentTab } from '../store/themeSlice';


const NavBar = () => {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  const isBouncing = useSelector((state: any) => state.theme.isBouncing);
  const showingIcon = useSelector((state: any) => state.theme.showingIcon);
  const currentTab = useSelector((state: any) => state.theme.currentTab);
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

  const handleCurrentTab = (tabClass: any) => {
    document.querySelectorAll('.nav-list a').forEach(tab => {
      tab.classList.remove('.active-tab');
    })

    const currentElement = document.querySelector(`.${tabClass}`);
    if (currentElement) {
      currentElement.classList.add('active-tab');
    }


    switch (tabClass) {
      case 'tab-1':
        dispatch(setCurrentTab(1));
        break;
      case 'tab-2':
        dispatch(setCurrentTab(2));
        break;
      case 'tab-3':
        dispatch(setCurrentTab(3));
        break;
      default:
        break;
    }
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

          <li>
            <Link to="/"
              className={`tab-1 ${currentTab === 1 ? 'active-tab' : ''}`}
              onClick={() => handleCurrentTab('tab-1')}
            >Home
            </Link>
          </li>
          <li>
            <Link to="/about"
              className={`tab-2 ${currentTab === 2 ? 'active-tab' : ''}`}
              onClick={() => handleCurrentTab('tab-2')}>About
            </Link>
          </li>
          <li>
            <Link to="/projects"
              className={`tab-3 ${currentTab === 3 ? 'active-tab' : ''}`}
              onClick={() => handleCurrentTab('tab-3')}>Projects
            </Link>
          </li>
          <li>
            <button className="dark-mode-btn" onClick={toggleDarkMode} aria-label='Light/Dark Mode Button' >
              <div className={isBouncing ? 'animate-bounce' : ''}>
                {getIcon()}
              </div>
            </button></li>
        </ul>
      </nav >
    </>
  )
}

export default NavBar;
