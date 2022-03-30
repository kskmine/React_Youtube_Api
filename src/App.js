/* eslint-disable react/jsx-no-undef */
import React from "react";
import Search from "./components/Search";
import VideoList from "./components/VideoList";
import Videoplayer from "./components/Videoplayer";
import "./styles/_video.css";

export default class App extends React.Component {
 
state = {
    videosMetaInfo: [],
    selectedVideoId: null
  };
 
render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
      
      <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo} />
          <Videoplayer videoId={this.state.selectedVideoId} />

          </div> 
    );
  }
 
}