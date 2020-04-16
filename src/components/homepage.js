import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  state = {
    apidata: [],
  };

  componentDidMount() {
    axios.get(`http://test.fuseclients.com/api/blog/list`).then((res) => {
      const apidata = res.data.data;
      this.setState({ apidata });
      // console.log(this.state.apidata);
    });
  }

  render() {
    // const divStyle = {
    //   backgroundImage: `url(${result.banner.image.url})`
    // };
    return (
      <ul className="item">
        {this.state.apidata.map((
          result, i //using image id as key,// todo make dynamic var
        ) => (
          <li
            key={i}
            style={{ backgroundImage: `url(${result.banner.image.url})` }}
          >
            <div>
              <Link to={`/entry/${result.slug}`}>
                <p>{result.banner.excerpt}</p>
                <p>{result.title}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Homepage;
