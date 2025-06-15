import NavBar from "./NavBar";
import "../assets/index.scss";
import "../assets/ContactStyles.css";
import LinkedInIcon from "../assets/img/LinkedIn.svg";
import GitHubIcon from "../assets/img/github-mark.svg";
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="contact-content-container">
                <a href="https://www.linkedin.com/in/fayaad-abrahams/" target="_blank">
                    <img className="linkedin-icon" src={LinkedInIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/FayaadAbrahams" target="_blank" aria-label="GitHub Profile" >
                    <img className="github-icon" src={GitHubIcon} alt="Github Icon" />
                </a>
                <a href="mailto:fayaad.abrahams1@gmail.com"  >
                    <MailIcon style={{ height: "41px !important" }} />
                </a>
            </div>
        </>
    )
}

export default Contact