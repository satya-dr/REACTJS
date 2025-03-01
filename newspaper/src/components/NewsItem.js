import React, { Component } from 'react'


export class NewsItem extends Component {


  render() {
    let {title,description,imageUrl,newsUrl,author,date, source} = this.props;
    return (
      <div className='my-3'>
          <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:'1'}}>{source}</span>
               <img src={!imageUrl?"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F83665594-89ac-40a2-92f8-f96a5a4da0da.jpg?source=next-barrier-page":imageUrl } className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">{title}
                  </h5>
                 <p className="card-text">{description}....</p>
                 <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                 <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
               </div>
             </div>
          </div>
    )
  }
}

export default NewsItem
