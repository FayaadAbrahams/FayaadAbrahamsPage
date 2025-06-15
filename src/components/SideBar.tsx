import "../assets/index.scss";
import "../assets/ContactStyles.css";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
const SideBar = () => {
    let iconSize = "35px";
    return (
        <>
            <div className="contact-content-container">
                <div className="contact-info-container">
                    <a href="https://www.linkedin.com/in/fayaad-abrahams/" target="_blank">
                        <FaLinkedin size={iconSize} className="linkedin-icon" />
                    </a>
                </div>
                <div className="contact-info-container">
                    <a href="https://github.com/FayaadAbrahams" target="_blank" aria-label="GitHub Profile" >
                        <FaGithub size={iconSize} className="github-icon"/>
                    </a>
                </div>
                <div className="contact-info-container">
                    <a href="tel:0637121904">
                        <FaPhoneAlt size={iconSize} />
                    </a>

                </div>
            </div>
        </>
    )
}

export default SideBar