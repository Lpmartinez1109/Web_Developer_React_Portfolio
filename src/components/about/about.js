import React, {Component} from 'react';
export default class About extends Component{
    render(){
        return(
            <React.Fragment>
                <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I help clients create and develop the websites and apps they need in their day-to-day lives. After graduating with a bachelor’s degree in Journalism from Eastern Illinois University and obtaining certification in Full Stack Web Development from Northwestern University-Chicago Campus, I worked on and created multiple different projects utilizing a number of different coding languages including HTML, CSS, Javascript, React.js, and MongoDB/Mongoose.
            </p>
            <p>
              My technical skills combined with my experience in collaborative, deadline-driven environments make me a strong addition to any data analysis team. I have experience working in large and small scale teams, with either all team members present or working remotely. While not working on projects or repos on Github, I spend my time learning, practicing and updating my skills and languages.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Luis Martinez</span><br />
                  <span>lpmartinez1109@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
            </React.Fragment>
        )
    }
}