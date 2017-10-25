import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import type { ContextRouter } from 'react-router-dom'
import axios from 'axios'

import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'
import MenuBar from './components/MenuBar'

import YoutubeUtil from './utils/YoutubeUtil'

import MyYoutubeApiKey from './youtube-api-key.json'

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      loading: false
    };
  }

  search (query) {
    const url = "https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=" + query + "&key="+MyYoutubeApiKey.api_key
  
    axios.get(url)
      .then(response => {
        const videos = YoutubeUtil.extractVideos(response.data);
        this.setState({videos: videos, loading: false});
        }
      )
      .catch(error => console.error(error))  

      this.setState({ loading: true });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Route render={ (context: ContextRouter) =>
            <MenuBar onSearch={(value: string) => {
              this.search(value)
              context.history.push('/')
            }} />
          } />
          <Switch>
            <Route exact path='/'
            render={() => {
                   if (this.state.loading) {
                     return <div>Loading...</div>
                   } else {
                     return <VideoList videos={this.state.videos}/>
                   }                  
                 }} />
            <Route exact path='/detail/:id' component={VideoPlayer} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;