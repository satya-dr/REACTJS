import React, { Component } from 'react';
import NewsItem from '../NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1, // ✅ এখানে "page" ঠিক আছে, "psge" ভুল ছিল
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page}&pageSize=20`;
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults });
  }

  handlePrevClick = async () => {
    console.log('Previous');

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page - 1}&pageSize=20`;
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1, 
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log('Next');
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page + 1}&pageSize=20`;
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1, 
      articles: parsedData.articles,
    });
   }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>CGEC-TIMES - Top Headlines...!</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title?.slice(0, 45) || 'No Title Available'}
                  description={element.description?.slice(0, 88) || 'No Description Available'}
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
