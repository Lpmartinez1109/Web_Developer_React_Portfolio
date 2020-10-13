import React, {Component} from 'react';
export default class Resume extends Component {
    render(){
        return (
            <React.Fragment>
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <div className="row item">
                    <div className="twelve columns">
                    <h3>Northwestern University School of Professional Studies</h3>
                    <p className="info">Professional Certificate in Full Stack (MERN) Web Development <span>•</span> <em className="date">December 2019 - March 2020</em></p>
                    <p>
                    A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.
                    </p>
                    </div>
                    </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Eastern Illinois University</h3>
                <p className="info">B.A. Degree in Journalism <span>•</span> <em className="date">August 2014 - May 2016</em></p>
                <p>
                </p>
                             </div>
                         </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Grubhub</h3>
                <p className="info">Data Entry Specialist<span>•</span> <em className="date">March 2017 - October 2019</em></p>
                <p>
                  Worked on multiple deadline-driven projects with large and small scale teams to deliver high standards of quality work within 48 hours.
                </p>
                <p>
                  Maintained constant communication with teammates and with restaurants and other clients via email and over the phone.
                </p>
                <p>
                  Quickly learned multiple new systems within the company to increase my work flow ability.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Gary Comer College Prep Middle School</h3>
                <p className="info">Enrollment Support Specialist <span>•</span> <em className="date">August 2016 - October 2016</em></p>
                <p>
                  Helped organize large scale student databases, both physical and online, to help prepare for the upcoming school year.
                </p>
                <p>
                 Assisted staff members with administrative duties, including office work and communication with student families to inform them of student happenings and important school year details.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>The Daily Eastern News</h3>
                <p className="info">News Editor <span>•</span> <em className="date">January 2016 - May 2016</em></p>
                <p>
                  Led a small staff of editors and reporters and worked with them to plan daily news stories throughout the week.
                </p>
                <p>
                 Worked on daily deadlines to write and edit at minimum ten stories and photos.
                </p>
                <p>
                    Collaborated with rotating reporters and helped them find their own stories to work on.
                </p>
                <p>
                    Covered multiple large-scale events including the new selection of the new university president.
                </p>
              </div>
            </div>
          </div> {/* main-col end */}
        </div>
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Web Developer with a background in Journalism and experience in working with front-end, back-end and full stack web development. Efficient in working independently and with teams across multiple tasks and in problem-solving to develop functioning applications. Experience in working in collaborative, deadline-driven environments.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand reactjs" /><em>React.js</em></li>
                <li><span className="bar-expand nodejs" /><em>Node.Js</em></li>
                <li><span className="bar-expand express" /><em>Express</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                <li><span className="bar-expand javascript" /><em>Javascript</em></li>
                <li><span className="bar-expand bootstrap" /><em>Bootstrap</em></li>
                <li><span className="bar-expand api" /><em>API</em></li>
                <li><span className="bar-expand mongodb" /><em>MongoDB/Mongoose</em></li>
                <li><span className="bar-expand mysql" /><em>MySQL/Sequelize</em></li>
                <li><span className="bar-expand mvc" /><em>MVC</em></li>
                <li><span className="bar-expand heroku" /><em>Heroku Deployment</em></li>
                <li><span className="bar-expand git" /><em>Git</em></li>
                <li><span className="bar-expand github" /><em>Github</em></li>
                <li><span className="bar-expand cplusplus" /><em>C++</em></li>
                <li><span className="bar-expand python" /><em>Python</em></li>
                <li><span className="bar-expand vuejs" /><em>Vue.js</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
            </React.Fragment>
        )
    }
};