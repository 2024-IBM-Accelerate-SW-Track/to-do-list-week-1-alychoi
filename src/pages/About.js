import React, { Component } from 'react';
import ProfilePic from '../assets/profile-pic.jpg';
import './About.css';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
          <div className="centered">
            <img 
            className="profile_image"
            src={ProfilePic}
            alt="Profile Pic"
            ></img>
          </div>
          </div>
          <div className="split right">
          <div className="centered">
          <div className="name_title">Alyssa Choi</div>
          <div className="brief_description">
          I am interested in the ML/AI field. A fun fact about me is that I am a Pilates instructor.
          </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}