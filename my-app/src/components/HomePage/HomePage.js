//The first screen visible to the user on the website
import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import "./HomePage.scss";
import Header from "../UI/Header/Header";

const HomePage = () => {
  const history = useHistory();
  
  //To generate a random id for the video call using shortid library
  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };

  // The UI design for the HomePage is defined below
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. </h2>
            <h2>Free for everyone.</h2>
            <p>
              We re-engineered the service built for secure
              meetings, MeetUp, to make it free and available for all.
            </p>
            <div className="action-btn">
              <button className="btn blue" onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src="https://media.istockphoto.com/vectors/video-conference-colleagues-taking-part-in-video-conference-in-home-vector-id1221644450?k=6&m=1221644450&s=612x612&w=0&h=4s51gepXGbczQaFCXK6lDKUW8YYUQ1_VWFDwegQLwRA=" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;