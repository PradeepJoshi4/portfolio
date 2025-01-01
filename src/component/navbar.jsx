import React from 'react'
import '../component/navbar.css'; // or your custom CSS file

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: "white" }}>My Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto" >
                            <li className="nav-item px-3">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Experience</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Skills</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
