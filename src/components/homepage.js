import React from "react";
import axios from "axios";

class Banner extends React.Component {
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
        {this.state.apidata.map((result) => ( //using image id as key,// todo make dynamic var
          <li key={result.banner.image.id} style={{ backgroundImage: `url(${result.banner.image.url})` }}>
           <div>
            <p>{result.banner.excerpt}</p>
            <p>{result.title}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Banner;


    
