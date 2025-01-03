import React from 'react';
import "../component/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand navbarcolor" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon iconcolorbyme"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 paddingbyme" style={{gap:"40px"}}>
                        {/* Social Media Icons */}
                        <li className="nav-item">
                            <a className="nav-link colorwhitebyme" href="https://www.instagram.com/yadeep_joshi" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colorwhitebyme" href="https://www.linkedin.com/in/pradeep-joshi-61898423b?utm_source=share&utm_campaign+share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
                            </a>
                        </li>
                     
                        <li className="nav-item">
                            <a className="nav-link colorwhitebyme" href="mailto:yadeepjoshi005@gmail.com">
                                <i className="fas fa-envelope"></i> {/* Email Icon (Contact) */}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
