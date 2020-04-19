import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./navbar";
// import Moment from "moment";

import "../App.css";

function Entry({ match }) {
  useEffect(() => {
    //moved/turduckin'd function inside of useEffect because of missing param error
    //"We moved the function inside the effect so it doesn’t need to be in its dependency list"
    //https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
    const fetchItems = async () => {
      const data = await Axios.get(
        `http://test.fuseclients.com/api/blog/${match.params.id}`
      );

      setListData(data.data.data);
     
    };

    fetchItems();
    // console.log(match);
  }, [match]);

  //following api data format//turduckin//inception
  const [listData, setListData] = useState([
    {
      banner: {        
        image: {
          data: {

          },
        },
      },
      pageData: "",
      postDate: {},
      author: "",
      catergory: "",
    },
  ]);

  // console.log(listData[0].banner.title);

  return (
    <Fragment>
      <Navbar
    title={listData[0].banner.title} //stuff this shit in there
    description={listData[0].banner.description}
    background={listData[0].banner.image.url}
  />
  <div className="injected" dangerouslySetInnerHTML={{__html: listData[0].pageData}} />
    </Fragment>
  );
}

export default Entry;
