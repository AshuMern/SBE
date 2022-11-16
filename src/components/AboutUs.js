import React from 'react';
import './AboutUs.css'
import ResponsiveAppBar from './NavBar';

function AboutUs() {
    return (<>
    <ResponsiveAppBar />
        <div className="about-section">
        <h1>About Us</h1>
        <p>We provide the best solvent sement goods in NCR.</p>
        <p>If you are looking for the listed products please contact us.</p>
        <p>GST:07BBFPS0666H1ZH</p>
      </div>
      
      <h2 style={{textAalign:"center"}}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="/image4.jpeg" alt="Jane" style={{width:"100%"}} />
            <div className="container">
              <h2>Ashok Shukla</h2>
              <p className="title">CEO & Founder</p>
              <p>Work in the qualty assurance dept.</p>
              <p>Atrishukla95@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      
        <div className="column">
          <div className="card">
            <img src="/image5.jpeg" alt="Mike" style={{width:"100%"}} />
            <div className="container">
              <h2>Atri Shukla</h2>
              <p className="title">Art Director</p>
              <p>Managing the distribution of all product in all over India.</p>
              <p>Atrishukla95@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default AboutUs;