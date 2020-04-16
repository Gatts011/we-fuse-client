import React from "react";
import axios from "axios";
import Logo from "../images/logo-neurox2.png"

class Banner extends React.Component {
  state = {
    apidata: [],
  };

  componentDidMount() {
    axios.get(`http://test.fuseclients.com/api/homepage`).then((res) => {
      const apidata = res.data.banner.image;
      this.setState({ apidata });
      console.log(this.state.apidata);
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
          <h1>Header</h1>
          <p>My supercool header</p>
      </div>
  </div>

    );
  }
}

export default Banner;
