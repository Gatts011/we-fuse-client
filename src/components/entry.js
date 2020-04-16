import React,{Fragment} from "react";
import axios from "axios";

class Entry extends React.Component {

  state = {
    apidata: [],
  };

  componentDidMount() {
    axios.get(`http://test.fuseclients.com/api/blog/${this.props.match.params.id}`).then((res) => {
      const apidata = res.data.data[0];
      this.setState({ apidata });
      // console.log(this.props.match.params.id);
      console.log(this.state.apidata.pageData);
      
    });
  }
  render() {
    const html = this.state.apidata.pageData;
    return (
      <div dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}

export default Entry;