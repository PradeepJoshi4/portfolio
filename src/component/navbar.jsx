import React, { useState } from 'react';
import "../component/navbar.css"
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand navbarcolor" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon iconcolorbyme"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 paddingbyme">
                        <li className="nav-item">
                            <a className="nav-link active colorwhitebyme" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  colorwhitebyme" aria-current="page" href="#">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  colorwhitebyme" aria-current="page" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  colorwhitebyme" aria-current="page" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  colorwhitebyme" aria-current="page" href="#">Contact</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
