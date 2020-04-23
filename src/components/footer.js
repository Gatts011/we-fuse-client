import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faGoogle, faYoutube, faVimeo, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <div>

          <p>Call Us (+27 82 818 8181) - Mail info@wefuse.co.za</p>
           
          
          </div>

          <div>
          <p><FontAwesomeIcon icon={faTwitter}/></p>
          <p><FontAwesomeIcon icon={faFacebook}/></p>
          <p><FontAwesomeIcon icon={faGoogle}/></p>
          <p><FontAwesomeIcon icon={faYoutube}/></p>
          <p><FontAwesomeIcon icon={faVimeo}/></p>
          <p><FontAwesomeIcon icon={faLinkedin}/></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
