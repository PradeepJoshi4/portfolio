import React, { useState } from 'react';
import file from "../files/gitcommands.txt";
import profileimg from "../images/profile.jpg";
import "../component/home.css";

const Home = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    // Function to split the text into individual letters
    const splitText = (text) => {
        return text.split("").map((letter, index) => (
            <span key={index} style={{ animationDelay: `${0.1 * index}s` }}>
                {letter}
            </span>
        ));
    };

    // Handle the end of the typing animation
    const handleAnimationEnd = () => {
        setShowParagraph(true);  // Show paragraph after animation ends
    };

    return (
        <div className="container">
            <div className="row align-items-center d-flex justify-content-center">
                {/* Left Section (Text) */}
                <div className="col-12 col-md-6 text-center text-md-start text-container mb-4">
                    <h4 onAnimationEnd={handleAnimationEnd}>
                        {splitText("Hi! I am Pradeep Joshi")}
                    </h4>
                    {/* Paragraph appears after the typing animation */}
                    <p className={`paragraph ${showParagraph ? 'show' : ''}`}>
                        A software engineer with experience in building web and mobile applications. Passionate about coding and problem-solving.
                    </p>
                    <a href={file} className="btn btn-outline-warning" download>
                        Download
                    </a>
                </div>

                {/* Right Section (Image) */}
                <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
                    <div className="img-container">
                        <img
                            src={profileimg}
                            alt="Person Portrait"
                            className="img-fluid rounded-circle"
                            style={{
                                width: '250px',
                                height: '250px',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
