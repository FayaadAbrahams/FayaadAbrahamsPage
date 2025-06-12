import './assets/App.css';
import NavBar from './NavBar.tsx';
function App() {

  const button = document.querySelector('.glow-button') as HTMLElement;

  if (button) {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    });

    button.addEventListener('mouseleave', () => {
      button.style.setProperty('--x', `50%`);
      button.style.setProperty('--y', `50%`);
    });
  }
  return (
    <>
      <NavBar />
      <div className="body-container">
        <div className="body-content-container">
          <div className="profile-image-container">
            <img src="https://avatars.githubusercontent.com/u/102885626?v=4" alt="Fayaad Abrahams" />
          </div>
          <div className="home-page-demo-container">
          </div>
          <h1 className='heading-left'>Hey!</h1>
          <h1>I'm Fayaad Abrahams.</h1>
          <div className="scrolling-words-container">
            <h2>I am a, </h2>
            <div className="scrolling-words-box">
              <ul>
                <li>Software Developer.</li>
                <li>Front-End Developer.</li>
                <li>Back-End Developer.</li>
                <li>Team Player.</li>
                <li>Problem Solver.</li>
              </ul>
            </div>
          </div>
          <p>Passionate about building clean, efficient, and user-centric applications.</p>
          <p>Feel free to explore my projects — and don’t hesitate to reach out.</p>
          <br />
          <p>Let’s build something <span className='special-glow'>meaningful</span> together.</p>
          <div className="contact-btn-container">
            <button><a href="mailto:fayaad.abrahams1@gmail.com??subject=Fayaad Abrahams Portfolio Inquiry" >Message Me</a></button>
            <form action="/resume.pdf" target="_blank">
              <button>Resume</button>
            </form>
          </div>
        </div>
      </div >

    </>
  )
}

export default App