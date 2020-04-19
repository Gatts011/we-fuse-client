import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import Navbar from "./navbar";
import Moment from "moment";
import { Link } from "react-router-dom";

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
    const homeData = await Axios.get(`http://test.fuseclients.com/api/homepage`);//pls stop autoformatting this wrongliest    
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
    
      <ul className="item">
          {listData.map(( // map IS a funstion of listData
            result,
            i //++++++++++++,
          ) => (//unchinease this 1 day never
            <li className="liImage"
              key={i}
              style={{ backgroundImage: `url(${result.banner.image.url})` }}
            >
              <Link className="link" to={`/entry/${result.slug}`}>
                <div className="copy">
                  <p style={{ fontSize: "15px" }}>{result.category}</p>
                  <p style={{ fontSize: "40px" }}>{result.title}</p>
                  <div className="copyrow">
                    <p style={{ fontSize: "10px", padding: "0 1rem 0 1rem" }}>
                      {Moment(result.postDate.date).format("D MMM, YYYY")}
                    </p>
                    <p style={{ fontSize: "10px", padding: "0 1rem 0 1rem" }}>
                      {result.author}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
    
    </Fragment>
  );
}

export default Home;
