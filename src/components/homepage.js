import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "moment";
import Header from "./header";

class Homepage extends React.Component {
  state = {
    apidata: [],
    blogdata: [],
  };

  componentDidMount() {
    axios.get(`http://test.fuseclients.com/api/blog/list`).then((res) => {
      const blogdata = res.data.data;
      axios.get(`http://test.fuseclients.com/api/homepage`).then((res) => {
        const apidata = res.data.banner;
        this.setState({ blogdata, apidata });        
      });
    });
  }

  render() {
    console.log('render');
    return (
      <Fragment>
        <Header
          title={this.state.apidata.title}
          description={this.state.apidata.description}
          background=""
        />
        <ul className="item">
          {this.state.blogdata.map((
            result,
            i //using image id as key,
          ) => (
            <li className="list"
              key={i}
              style={{ backgroundImage: `url(${result.banner.image.url})` }}
            >
              <Link className="link" to={`/entry/${result.slug}`}>
                <div className="copy">
                  <p style={{ fontSize: "15px" }}>{result.category}</p>
                  <p style={{ fontSize: "40px" }}>{result.title}</p>
                  <div className="copyrow">
                    <p style={{ fontSize: "10px", padding: "0 1rem 0 1rem" }}>
                      {Moment(result.postDate.date).format("D MMM, YYYY")}
                    </p>
                    <p style={{ fontSize: "10px", padding: "0 1rem 0 1rem" }}>
                      {result.author}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Homepage;
