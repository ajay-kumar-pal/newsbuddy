import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
      title: "Pico can’t let TikTok stop its US launch",
      description:
        "Recent history has shown us that consumers care about the product more than the company behind it, so why is Pico waiting to launch its Quest competitor in the U.S.?",
      url: "https://www.androidcentral.com/gaming/virtual-reality/pico-cant-let-tiktok-stop-its-us-launch",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/MP6vanMVVzUQJD8AxtJrc8-1200-80.jpg",
      publishedAt: "2023-03-26T15:30:00Z",
      content:
        "This week, the annual Game Developers Conference (GDC) was met with a hurricane and a barrage of people, but there was one storm that we expected but never saw materialize: the Pico 4's U.S. launch.\r… [+4403 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Hartley Charlton",
      title:
        "Apple Watch Blood Glucose Monitoring Likely Still 'Three to Seven Years' Away",
      description:
        "Blood glucose monitoring technology designed for the Apple Watch is unlikely to launch for several years, Bloomberg reporter Mark Gurman believes.\n\n\n\n\n\nIn February, Gurman reported that Apple has made major progress with its noninvasive blood glucose monitori…",
      url: "https://www.macrumors.com/2023/03/26/apple-watch-blood-glucose-up-to-seven-years-away/",
      urlToImage:
        "https://images.macrumors.com/t/QnplyQ3Vy10Ul2k9Tn6iKQF0Xwo=/2500x/article-new/2023/03/Apple-Watch-Blood-Glucose-Monitoring-Feature-2.jpg",
      publishedAt: "2023-03-26T13:28:43Z",
      content:
        "Blood glucose monitoring technology designed for the Apple Watch is unlikely to launch for several years, Bloomberg reporter Mark Gurman believes.\r\nIn February, Gurman reported that Apple has made ma… [+732 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Hartley Charlton",
      title: "Gurman: iOS 17 to Provide Several 'Most Requested Features'",
      description:
        'Apple changed the strategy for iOS 17 later in its development process to add several new features, suggesting that the update may be more significant than previously thought, Bloomberg\'s Mark Gurman reports.\n\n\n\n\n\nIn the latest edition of his "Power On" newsl…',
      url: "https://www.macrumors.com/2023/03/26/ios-17-to-provide-several-most-requested-features/",
      urlToImage:
        "https://images.macrumors.com/t/2ofw9g5kA2rRBh-5uj9QHg9mBtw=/2250x/article-new/2023/02/iOS-17-on-Phone-Feature.jpg",
      publishedAt: "2023-03-26T13:05:23Z",
      content:
        "Apple changed the strategy for iOS 17 later in its development process to add several new features, suggesting that the update may be more significant than previously thought, Bloomberg's Mark Gurman… [+1175 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Lisa Eadicicco",
      title:
        "VR Is Revolutionizing Therapy. Why Aren't More People Using It? - CNET",
      description:
        "VR therapy has been studied since the 1990s. But as of 2023, we're still talking about its potential.",
      url: "https://www.cnet.com/roadshow/news/features/vr-is-revolutionizing-therapy-why-arent-more-people-using-it/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/63015691e22cab37fd88a9cd96443c6cc1eefd37/hub/2023/03/23/e8cad661-489f-47ad-889f-882a0e714241/vr-therapy-main.png?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-03-26T12:00:28Z",
      content:
        "Sam Stokes, a New Zealand-based sales manager, isn't usually an anxious person. But there's one thing that, as he puts it, scared the shit out of him: needles. \r\nHis aversion was severe enough to hol… [+17791 chars]",
    },
  ];
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "sports",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6bc61a55ce844d0b96ce10bea657da02&pagesize=${this.props.pageSize}&page= ${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedDate = await data.json();
    this.setState({ loading: false });
    this.setState({
      page: this.state.page - 1,
      articles: parsedDate.articles,
    });
  }

  async componentDidMount(props) {
    this.updateNews();
  }
  
  handleNextClick = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsBuddy - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    source={element.source}
                    date={element.publishedAt ? element.publishedAt : "Unknown"}
                    author={element.author ? element.author : "Unknown"}
                    urlToImage={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_658,w_1170,x_0,y_176/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1681825070/La-cattura-di-JJ4-in-Val-Meledrio-a-cura-del-Corpo-forestale-trentino_imagefullwide_n4e7xr"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    newsUrl={element.url}
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
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
