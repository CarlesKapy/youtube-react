import React, {Component} from 'react';
import VideoList from './components/VideoList'
import SearchForm from './components/SearchForm'
import axios from 'axios'

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      videos: []
    };
  }

  search (query) {
    const url = "https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=" + query + "&key=YOUTUBE_API_KEY"
  
    axios.get(url)
      .then(response => {
        const videos = response.data.items.filter(v => 
          v.id.kind === "youtube#video"
        );

        this.setState({videos: videos});
        }
      )
      .catch(error => console.error(error))  
  }

  render() {
    return (
      <div>
        <SearchForm onSearch={(query) => {this.search(query)}}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }

}

export default App;