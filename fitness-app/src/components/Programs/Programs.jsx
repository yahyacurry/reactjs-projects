import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArow from '../../assets/rightArrow.png'
const programs = () => {
  return (
    <div>
      <div className="Programs" id="Programs">
        <div className="programs-header">
            <span className="stroke-text">Explore our </span>
            <span>Programs </span>
            <span className="stroke-text">to shape you</span>
        </div>

        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                      <span>Join Now</span>
                      <img src={RightArow} alt="" />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default programs

