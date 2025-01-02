import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <div className="container my-3">
      <h4 className="text-center mb-4">Experience</h4>
      <div className="row">
        <div className="col-12 col-md-6 mb-4"> {/* Add margin for mobile responsiveness */}
          <div className="experience-box shadow-lg animate-box-left text-center">
            <h5 className='colorbyme'>Internship (Python)</h5>
            <p className='colorbymeforcname'>Indivibe Infotech pvt. ltd.</p>
            <p className='description'>I have done a internship in python programming language in which I worked on different web projects using Django framework.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4"> {/* Add margin for mobile responsiveness */}
          <div className="experience-box shadow-lg animate-box-right text-center">
            <h5 className='colorbyme'>Software Developer</h5>
            <p className="colorbymeforcname">Datamato technologies pvt. ltd.</p>
            <p className='description'>Currently working in Datamato organization as a software engineer from last 1.5 years.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
