import React from "react";
import youtubeAPI from '../api/youtube'
class Search extends React.Component {
  state = { title: "" };
  onSearchChanged = event => {
    const _title = event.target.value;
    this.setState({ title: _title });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };

  onSearch = async keyword => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Enter Search Keyword"
            />
          </div>
        </form>
      </>
    );
  }
}

export default Search;