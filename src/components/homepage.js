import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from 'moment';

class Homepage extends React.Component {
  state = {
    apidata: [],
  };

  componentDidMount() {
    axios.get(`http://test.fuseclients.com/api/blog/list`).then((res) => {
      const apidata = res.data.data;
      this.setState({ apidata });
      console.log(this.state.apidata);
    });
  }

  render() {
    // const divStyle = {
    //   backgroundImage: `url(${result.banner.image.url})`
    // };
    return (
      <ul className="item">
        {this.state.apidata.map((
          result,
          i //using image id as key,
        ) => (
            <Link className="link" to={`/entry/${result.slug}`} >
              <li key={i} style={{ backgroundImage: `url(${result.banner.image.url})` }}>
                <div className="copy" >
                  <p style={{ fontSize: "15px"}}>{result.category}</p>
                  <p style={{ fontSize: "40px"}}>{result.title}</p>
                  <div className="copyrow">
                  <p style={{ fontSize: "10px", padding: "0 1rem 0 1rem" }}>                    
                    {Moment(result.postDate.date).format('D MMM, YYYY')}
                  </p>
                  <p style={{fontSize: "10px", padding: "0 1rem 0 1rem" }}>
                    {result.author}
                  </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    );
  }
}

export default Homepage;
