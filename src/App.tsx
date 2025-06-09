import './assets/App.css';
import NavBar from './NavBar.tsx';

function App() {

  return (
    <>
      <NavBar />
      <div className="body-container">
        <div className="body-content-container">
          <h1 className='heading-left'>Hey!</h1>
          <h1>I'm Fayaad Abrahams.</h1>
          <h3>Software Developer </h3>
          <p>Feel free to explore my projects and get in touch with me.</p>
          <div className="contact-btn-container">
            <button>Contact Me</button>
            <button>Resume</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App