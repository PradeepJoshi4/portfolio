import React from 'react';

const Projects = () => {
    return (
        <div className="container mt-3">
            <h2 className="text-center mb-3" style={{ fontSize: "25px", color: "white" }}>Projects</h2>
            <div className="row">
                {/* Project 1 */}
                <div className="col-md-6 col-12 mb-4">
                    <div className="card shadow-lg border-light rounded d-flex flex-column" style={{ minHeight: "215px" }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-primary">Static CRUD using React JS</h5>
                            <p className="card-text">This project showcases my work in web development using React.js, with HTML, CSS, and JavaScript for building a static CRUD app. It also contains bootstrap classes which helps it to make it responsive</p>
                            <a href="https://pradeepjoshi4.github.io/mywebsite/" className="btn btn-outline-success" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="col-md-6 col-12 mb-4">
                    <div className="card shadow-lg border-light rounded d-flex flex-column" style={{ minHeight: "200px" }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-success">Asset and User Management System</h5>
                            <p className="card-text">Developed a system for asset and user management, using Java for the backend and React for the frontend. It handles all client-side operations and integrates with a secure backend for efficient management.</p>
                            <button className="btn btn-outline-success" disabled>Project Deployed on Client Premises</button>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="col-md-6 col-12 mb-4">
                    <div className="card shadow-lg border-light rounded d-flex flex-column" style={{ minHeight: "200px" }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-danger">HR Management Tool</h5>
                            <p className="card-text">This tool helps analyze employee data for internal use, facilitating better HR decision-making with data-driven insights for workforce management.</p>
                            <button className="btn btn-outline-danger" disabled>Project Deployed Internally</button>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="col-md-6 col-12 mb-4">
                    <div className="card shadow-lg border-light rounded d-flex flex-column" style={{ minHeight: "200px" }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-info">AI-based Data Analysis with IBM WatsonX API</h5>
                            <p className="card-text">Utilized Java Spring Boot and IBM's WatsonX API to create a prompt lab for data analysis. This project uses advanced AI technology to generate insights from large datasets.</p>
                            <button className="btn btn-outline-info" disabled>Project Deployed Internally</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
