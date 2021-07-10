import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://media.istockphoto.com/vectors/video-call-icon-logo-vector-illustration-video-call-icon-design-vector-id1219543272?k=6&m=1219543272&s=612x612&w=0&h=YLxwCeqVn_Jq5TPV6jxvf3JKYIVxMuGejGGUeE6tf30=" alt=""/>
        <span className="help-text">MeetUp</span>
      </div>
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
      </div>
    </div>
  );
};
export default Header;