import React from "react";
import axios from "axios";
import Logo from "../images/logo-neurox2.png"

class Banner extends React.Component {
  state = {
    apidata: [],
  };

  componentDidMount() {
    axios.get(`http://test.fuseclients.com/api/homepage`).then((res) => {
      const apidata = res.data.banner;
      this.setState({ apidata });
      // console.log(this.state.apidata);
    });
  }

  render() {
    return (   

  <div className="container">
      <div className="navbar">
          <div><img alt="" src={Logo}/></div>
          <div><a href="hotkey.co.za">About</a></div>
      </div>
      <div className="header">
          <h1>{this.state.apidata.title}</h1>
          <h2>{this.state.apidata.description}</h2>
      </div>
  </div>

    );
  }
}

export default Banner;
