import { useEffect } from 'react';
import '../assets/LandingPageStyles.css';
import NavBar from './NavBar.tsx';

import { FaReact } from "react-icons/fa";


function LandingPage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.main-page-card');
    let currCardIndex = 0;

    if (cards.length > 0) {
      const rotateCards = () => {

        cards.forEach(card => {
          card.classList.remove('card-front', 'card-left', 'card-right');
        });

        const leftCardIndex = (currCardIndex + 2) % 3;
        const frontCardIndex = currCardIndex;
        const rightCardIndex = (currCardIndex + 1) % 3;

        cards[leftCardIndex].classList.add('card-left');
        cards[frontCardIndex].classList.add('card-front');
        cards[rightCardIndex].classList.add('card-right');

        currCardIndex = (currCardIndex + 1) % 3;
      };

      rotateCards();

      const interval = setInterval(rotateCards, 6000);

      return () => clearInterval(interval);
    }
  }, []);


  return (
    <>
      <NavBar />
      <div className="body-container non-select">
        <div className="body-content-container" >
          <div className="main-page-card-holder">
            <div className="main-page-card card-left">
              <div className="card-content">
                <FaReact size={"80px"} />
              </div>
            </div>
            <div className="main-page-card card-front"></div>
            <div className="main-page-card card-right"></div>
          </div>
          <div className="profile-image-container">
            <img src="https://avatars.githubusercontent.com/u/102885626?v=4" alt="Fayaad Abrahams" />
          </div>
          <h1>Hey!</h1>
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
              <button className="resume-btn">Resume</button>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default LandingPage;