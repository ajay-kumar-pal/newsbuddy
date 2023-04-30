import React, { Component } from 'react'

export class NewsItem extends Component {
    render(){
        let {title,description,urlToImage,newsUrl,author,date,source} = this.props;
        return (
          <>
              <div className="card" >
                  <img src={urlToImage} className="card-img-top" alt="..."/>
                  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'90%'}}>{source.name}</span>
                  <div className="card-body">
                      <h5 className="card-title">{title}...</h5>
                      <p className="card-text">{description}...</p>
                      <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                      <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                  </div>
              </div>
          </>
        )
    }
}
export default NewsItem;