import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Homepagecopy() {

  

  axios.get(`http://test.fuseclients.com/api/blog/list`).then((res) => {
    const apidata = res.data.data;
    setData();
    // console.log(this.state.apidata);
  });
  const [apidata, setData] = useState([])

  return (
    <ul className="item">
      {this.state.apidata.map((
        result,
        i //using image id as key,// todo make dynamic var
      ) => (
        <li
          key={i}
          style={{ backgroundImage: `url(${result.banner.image.url})` }}
        >
          <div>
            <Link to={`/entry/${result.slug}`}>
              <p>{result.banner.excerpt}</p>
              <p>{result.title}</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Homepagecopy;
