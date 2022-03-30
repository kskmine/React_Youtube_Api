/* eslint-disable react/jsx-no-undef */
import React from "react";
import youtubeAPI from "./api/youtube";
import Search from "./components/Search";
import VideoList from "./components/VideoList";
import Videoplayer from "./components/VideoPlayer";
import "./styles/_video.css";

export default class App extends React.Component {
 
state = {
    videosMetaInfo: [],
    selectedVideoId: null
  };
  
  onVideoSelected=videoId=>{
    this.state({
      selectedVideoId:videoId
    })
  }

  onSearch=async keyword=>{
    const response=await youtubeAPI.get("/search",{
      params:{
        q:keyword
      }
    }) 

  this.setState({
    videosMetaInfo:Response.data.items,
    selectedVideoId:Response.data.items[0].id.videoId
  });

  console.log(this.state)
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
 