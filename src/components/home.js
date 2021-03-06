import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import Header from "./header";
import Moment from "moment";

import { Link } from "react-router-dom";
import {
  faUserCog,
  faUserFriends,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";
//no prop here
function Home() {
  useEffect(() => {
    fetchItems();
  }, []);

  //sub sub of sub inception//turduckin//postmanftw
  const [homeData, setHomeData] = useState({ banner: {} });
  const [listData, setListData] = useState([
    {
      title: "",
      postDate: {},
      banner: {
        image: {},
      },
    },
  ]);

  //gobabygo
  const fetchItems = () => {
    Axios.all([
      Axios.get("http://test.fuseclients.com/api/homepage"),
      Axios.get("http://test.fuseclients.com/api/blog/list"),
    ]).then((responseArr) => {
      //this will be executed only when all requests are complete
      setHomeData(responseArr[0].data);
      setListData(responseArr[1].data.data);
    });
  };

  return (
    <Fragment>
      <Header
        title={homeData.banner.title} //stuff this shit in there
        description={homeData.banner.description}
        background=""
      />

      {listData.map((result, i) => (
        ///key goes in parent///always blame the parents 1st
        <div className="parent" key={i}>
          <div
            className="child"
            style={{ backgroundImage: `url(${result.banner.image.url})` }}
          >
            <div className="uncle">
              <Link className="anchor" to={`/entry/${result.slug}`}>
                <p style={{ fontSize: "15px" }}>{result.category}</p>

                <p
                  style={{
                    margin: 0,
                    alignItems: "space-between",
                    fontSize: "40px",
                  }}
                >
                  {result.title}
                </p>

                <div className="copyrow">
                  <p style={{ fontSize: "10px", padding: "0 1rem 0 1rem" }}>
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ paddingRight: "0.5em" }}
                    />
                    {Moment(result.postDate.date).format("D MMM, YYYY")}
                  </p>
                  <p style={{ fontSize: "10px", padding: "0 1rem 0 1rem" }}>
                    {result.author === "admin" ? ( //conditonally render icon if author is admin
                      <FontAwesomeIcon
                        icon={faUserFriends}
                        style={{ paddingRight: "0.5em" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faUserCog}
                        style={{ paddingRight: "0.5em" }}
                      />
                    )}

                    {result.author}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default Home;
