import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import Navbar from "./navbar";
import Moment from "moment";
import { Link } from "react-router-dom";
import {faUserCog, faUserFriends, faClock } from "@fortawesome/free-solid-svg-icons";
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
  const fetchItems = async () => {
    const homeData = await Axios.get(
      `http://test.fuseclients.com/api/homepage`
    ); //pls stop autoformatting this wrongliest
    setHomeData(homeData.data);
    // console.log(homeData.data);

    const data = await Axios.get(`http://test.fuseclients.com/api/blog/list`);
    setListData(data.data.data);
  };

  // console.log(listData[0].postDate.date);

  return (
    <Fragment>
      <Navbar
        title={homeData.banner.title} //stuff this shit in there
        description={homeData.banner.description}
        background=""
      />
      {/* <Navbar title={homeData.banner.title} description={homeData.banner.description} background={homeData.banner.image.url}/> */}

      {listData.map((
        // map IS a funstion of listData
        result,
        i //++++++++++++, 
      ) => ( //unchinease this 1 day never//modules????
        <div className="parent">
          <div
            class="child"
            key={i}
            style={{ backgroundImage: `url(${result.banner.image.url})` }}
          >
            <div class="uncle">
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
                      <FontAwesomeIcon icon={faUserFriends} style={{ paddingRight: "0.5em" }}/>
                    ) : (
                      <FontAwesomeIcon icon={faUserCog} style={{ paddingRight: "0.5em" }}/>
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
