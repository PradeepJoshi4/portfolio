import React, { useState } from 'react';
import '../component/navbar.css'; // Your custom CSS file

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to track sidebar visibility

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false); // Close the sidebar
    };

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: "white" }}>My Portfolio</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleSidebar} // Toggle sidebar on click
                        aria-controls="navbarNav"
                        aria-expanded={isSidebarOpen ? "true" : "false"} // Dynamic aria-expanded
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
                    </button>
                    {/* Sidebar Menu */}
                    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                        <button className="close-btn" onClick={closeSidebar}>&times;</button> {/* Close icon */}
                        <ul className="navbar-nav">
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#">Home</a>
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
                    {/* Main navbar */}
                    <div className={`collapse navbar-collapse ${isSidebarOpen ? 'd-none' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
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
    );
};

export default Navbar;
