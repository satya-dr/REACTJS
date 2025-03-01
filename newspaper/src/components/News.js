import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    catagory: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    catagory: PropTypes.string,
  };

  capitalizedfirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `CGEC-TIMES  - ${this.capitalizedfirstLetter(
      this.props.catagory
    )}`;
  }

  async updateNews(pageNo) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let response = await fetch(url);
    // let parsedData = await response.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading: false});
    this.updateNews();
  }

  handlePrevClick = async () => {
    console.log("Previous");

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let response = await fetch(url);
    // let parsedData = await response.json();
    // console.log(parsedData);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    console.log("Next");
    //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true})
    //   let response = await fetch(url);
    //   let parsedData = await response.json();
    //   console.log(parsedData);

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });

    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b5c5c52a78974afe91c9b9e631cde16d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0px" }}>
          CGEC-TIMES - Top "{this.capitalizedfirstLetter(this.props.catagory)}"
          Headlines
        </h1>

        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          
          <div className="container">
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-3" key={element.url}>
                      <NewsItem
                        title={
                          element.title?.slice(0, 45) || "No Title Available"
                        }
                        description={
                          element.description?.slice(0, 88) ||
                          "No Description Available"
                        }
                        newsUrl={element.url}
                        imageUrl={element.urlToImage}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
               <button
                 disabled={this.state.page <= 1}
                 type="button"
                 className="btn btn-dark my-3"
                 onClick={this.handlePrevClick}
               >
                 &larr; Previous
               </button>
               <button
                 disabled={
                   this.state.page + 1 >
                   Math.ceil(this.state.totalResults / this.props.pageSize)
                 }
                 type="button"
                 className="btn btn-dark my-3"
                 onClick={this.handleNextClick}
               >
                 Next &rarr;
               </button>
             </div> */}
      </>
    );
  }
}

export default News;
