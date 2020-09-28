import React, {Component} from 'react';
export default class Footer extends Component {
    render(){
        return (
            <React.Fragment>
     {/* footer
   ================================================== */}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/profile.php?id=100001276301148" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/LPMartinez20" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
              {/* <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
              <li><a href="https://www.linkedin.com/in/luis-martinezjr/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/lpmartinez1109/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/Lpmartinez1109" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
              {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
              {/* <li><a href="#"><i className="fa fa-skype" /></a></li> */}
            </ul>
            <ul className="copyright">
              <li>© Copyright 2020</li>
              <li>Design Inspired by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
            </React.Fragment>
        )
    }
};