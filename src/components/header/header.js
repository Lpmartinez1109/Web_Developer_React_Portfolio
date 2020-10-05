import React, {Component} from 'react';
export default class Header extends Component {
    render(){
        return (
            <React.Fragment>
      {/* Header
   ================================================== */}
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am <span> Luis Martinez</span>.</h1>
            <h3>I'm a Chicago based <span>web developer </span> working hard to create awesome and
              effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/profile.php?id=100001276301148" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/LPMartinez20" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
              {/* <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
              <li><a href="https://www.linkedin.com/in/luis-martinezjr/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/lpmartinez1109/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/Lpmartinez1109" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
              {/* <li><a href="#"><i className="fa fa-skype" /></a></li> */}
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header> {/* Header End */}
                  </React.Fragment>
        )
    }
};