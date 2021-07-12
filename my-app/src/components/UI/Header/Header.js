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
        <img src="https://media.istockphoto.com/vectors/vector-illustration-of-spilling-coffee-from-a-mug-a-cup-of-coffee-a-vector-id1146099423?k=6&m=1146099423&s=612x612&w=0&h=WowLOSZw49bpIafnVI8cj67b4DzaBCwCLjL7H8E7lxs=" alt=""/>
        <span className="help-text">Spill-The-Tea</span>
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