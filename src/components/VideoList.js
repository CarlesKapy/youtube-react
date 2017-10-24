// @flow
import React from 'react';
import VideoItem from './VideoItem'
import './VideoList.css'
import Video from './types'

type Props = {
    videos: Array<Video>
}

const VideoList = function (props: Props) {

    const videoItems = props.videos
    .map(v => 
      <VideoItem key={v.id} video={v}/>
    );

    return (
        <div className="video-list">{videoItems}</div>
    );
}

export default VideoList;