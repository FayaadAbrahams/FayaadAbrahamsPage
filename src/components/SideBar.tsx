import "../assets/index.scss";
import "../assets/ContactStyles.css";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
const SideBar = () => {
    let iconSize = "35px";
    const [isOpen, setIsOpen] = useState(false);

    function handleTel() {
        navigator.clipboard.writeText("0637121904");
        setIsOpen(!isOpen);
    }

    function onTelclose() {
        setIsOpen(false);
    }
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
                        <FaGithub size={iconSize} className="github-icon" />
                    </a>
                </div>
                <div className="contact-info-container">
                    <a href="tel:0637121904" onClick={handleTel}>
                        <Snackbar
                            open={isOpen}
                            autoHideDuration={6000}
                            onClose={onTelclose}
                            message="Copied Cellphone Number!"
                        />
                        <FaPhoneAlt size={iconSize} className="telephone-icon" />
                    </a>

                </div>
            </div>
        </>
    )
}

export default SideBar