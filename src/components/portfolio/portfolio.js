import React, {Component} from 'react';
import knightfall from './knightfall.png';
import titanic from './titanic.png';
import dashboard from './weatherdashboard.png';
import datenight from './datenight.png';
import budget from './progressivebudget.png';
import quiz from './chicagoquiz.png';

export default class Portfolio extends Component{
    render(){
        return(
            <React.Fragment>
                <section id="portfolio">
                <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://thawing-cliffs-03966.herokuapp.com/" target="_blank" rel="noopener noreferrer" title>
                    <img alt="KnightFall" src={knightfall} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>KnightFall</h5>
                        <p>A RPG-style game</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://calm-ravine-14459.herokuapp.com/" target="_blank" rel="noopener noreferrer" title>
                    <img alt="Titanic Homepage" src={titanic} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Titanic: An Educational Experience</h5>
                        <p>An educational project which allows users to experience life onboard the Titanic.</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://kaitlynsalemi.github.io/Date-Night-Generator/" target="_blank" rel="noopener noreferrer" title>
                    <img alt="Date Night" src={datenight} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Dinner And A Movie</h5>
                        <p>A date-night planning application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://lpmartinez1109.github.io/Weather_Dashboard/"  rel="noopener noreferrer" title>
                    <img alt="" src={dashboard} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Weather Dashboard</h5>
                        <p>A weather application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://limitless-sea-69514.herokuapp.com/" target="_blank" rel="noopener noreferrer" title>
                    <img alt="Budget Application" src={ budget } />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Progressive Budget App</h5>
                        <p>A budget tracking application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://lpmartinez1109.github.io/Chicago_Code_Quiz/" target="_blank" rel="noopener noreferrer" title>
                    <img alt="Chicago Code Quiz" src= { quiz } />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Chicago Code Quiz</h5>
                        <p>A fun trivia game based on Chicago facts</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/origami.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Origami</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt="" src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
            <div className="description-box">
              <h4>Coffee Cup</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
            <div className="description-box">
              <h4>Console</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
            <div className="description-box">
              <h4>Judah</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
            <div className="description-box">
              <h4>Into the Light</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
            <div className="description-box">
              <h4>Girl</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
            <div className="description-box">
              <h4>Origami</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
        </div> {/* row End */}
      </section>
            </React.Fragment>
        )
    }
}