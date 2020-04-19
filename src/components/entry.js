import React, { Fragment } from "react";
import axios from "axios";
import Header from './header'

class Entry extends React.Component {

  state = {
    pageData: '',
    title:'',    
    desc: '',
    imageurl:'',
  };

  async componentDidMount() {
    const id = this.props.match.params.id
    const {data} = await axios.get(`http://test.fuseclients.com/api/blog/${id}`)      
    this.setState({ 
      pageData : data.data[0].pageData, 
      title : data.data[0].banner.title , 
      desc : data.data[0].banner.description,
      imageurl : data.data[0].banner.image.url});//oooooof     
   
  }
  render() {
    // console.log("render" + this.state.apidata);
    const html = this.state.pageData;
    const de = this.state.desc;
    const ti = this.state.title;
    const iu = this.state.imageurl;

    console.log('render')
    
    return (
      <Fragment>
      <Header title={ti} description={de} background={iu}/>
      <div className="injected" dangerouslySetInnerHTML={{__html: html}} />
      </Fragment>
    )
  }
}

export default Entry;