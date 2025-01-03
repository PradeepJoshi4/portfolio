import React from 'react';
import { FaReact, FaPython, FaJs, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa'; // Importing specific icons
import './index.css'; // Import the CSS file with the animations

const Skills = () => {
    return (
        <div className="container mt-3">
            <h2 className="text-center mb-4" style={{ fontSize: "25px" }}>Skills</h2>
            <div className="row">
                {/* For small screens, use col-6 for 2 skills per row */}
                <div className="col-3 col-md-3 text-center fade-in">
                    <FaReact size={50} />
                    <h5>ReactJS</h5>
                </div>
                <div className="col-3 col-md-3 text-center fade-in">
                    <FaPython size={50} />
                    <h5>Python</h5>
                </div>
                <div className="col-3 col-md-3 text-center fade-in">
                    <FaJs size={50} />
                    <h5>JavaScript</h5>
                </div>
                <div className="col-3 col-md-3 text-center fade-in">
                    <FaJava size={50} />
                    <h5>Java</h5>
                </div>

                <div className="col-3 col-md-3 text-center mt-4 scale-up">
                    <FaJs size={50} /> {/* You can replace this with TypeScript icon */}
                    <h5>TypeScript</h5>
                </div>
                <div className="col-3 col-md-3 text-center mt-4 scale-up">
                    <FaDatabase size={50} />
                    <h5>MySQL</h5>
                </div>
                <div className="col-3 col-md-3 text-center mt-4 scale-up">
                    <FaReact size={50} /> {/* Or use Django icon if available */}
                    <h5>Django</h5>
                </div>

                <div className="col-3 col-md-3 text-center mt-4 scale-up">
                    <FaGitAlt size={50} />
                    <h5>Git</h5>
                </div>
            </div>
        </div>
    );
};

export default Skills;
