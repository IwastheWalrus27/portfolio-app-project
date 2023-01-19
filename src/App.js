import React from "react";
import './App.css';
//import fileData from "./data/ideas.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bored from "./components/Bored";
import GitHubProf from "./components/GitHubProf";
import YoutubeVids from "./components/YoutubeVids";

const User= {
  apiKey: "AIzaSyDY3TaCae8_5aAIRAhMR3IZWLW8S8be9l0",
  channelId : "UCM9fXitsjX0IAnbsR7bOPhA"
}


function App() {
  
  return (
    <>
      <header className="text-center">
        <h1 style={{height:"5rem"}}>
          My Portfolio
        </h1>
      </header>

      <div >
      {/* Here I will put the slider guy*/}
      <div className="col-xs-1" align="center" >
        <GitHubProf></GitHubProf>
      </div>
      <h1>My Youtube Videos</h1>
      <YoutubeVids {...User}></YoutubeVids>
      <h1>
          Today you should...
      </h1>
      <Bored></Bored>
      </div>
    </>
  );
}

export default App;
