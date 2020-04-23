import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import Header from "./header";
import Moment from "moment";
import {
  faFolderOpen,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

function Entry({ match }) {
  useEffect(() => {
    //moved/turduckin'd function inside of useEffect because of missing param error
    //"We moved the function inside the effect so it doesn’t need to be in its dependency list"
    //https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
    const fetchItems =  () => {
      Axios.get(`http://test.fuseclients.com/api/blog/${match.params.id}`
      ).then((response) => { setListData(response.data.data) })}

    fetchItems();
    // console.log(match);
  }, [match]);

  //following api data format//turduckin//inception
  const [listData, setListData] = useState([
    {
      banner: {
        image: {
          data: {},
        },
      },
      pageData: "",
      postDate: {},
      author: "",
      category: "",
    },
  ]);

  console.log(listData[0].category);

  return (
    <Fragment>
      <Header
        title={listData[0].banner.title}
        description={listData[0].banner.description}
        background={listData[0].banner.image.url}
        display="none"
      />
      <div className="postinfo">
        <div className="left">
          <div>
            <FontAwesomeIcon icon={faCalendar} className="posticon" />
            {Moment(listData[0].postDate.date).format("D MMM, YYYY")}
          </div>
        </div>
        <div className="right">
          <div>
          <FontAwesomeIcon icon={faFolderOpen} className="posticon" />
          {listData[0].category}
          </div>
        </div>
      </div>
      <div
        className="injected"
        dangerouslySetInnerHTML={{ __html: listData[0].pageData }}
      />
    </Fragment>
  );
}

export default Entry;
