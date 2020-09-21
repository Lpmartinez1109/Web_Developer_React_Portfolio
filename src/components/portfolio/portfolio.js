import React, {Component} from 'react';
export default class Portfolio extends Component{
    render(){
        if(this.props.data){
          var works = this.props.data.works.map(function(works){
            var worksImages = 'images/portfolio'+works.image;
            return <div key={works.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={works.url} title={works.title}>
                  <img alt={works.title} src={worksImages} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{works.title}</h5>
                      <p>{works.category}</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>
          })
        }
        return(
                <section id="portfolio">
                  <div className="row">
                   <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                  <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {works}
                  </div>
                </div>
              </div>
            </section>
        )
    }
}