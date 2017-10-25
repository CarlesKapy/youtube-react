// @flow
import React from 'react';
import { Link } from 'react-router-dom'
import VideoItem from './VideoItem'
import './VideoList.css'
import Video from './types'

type Props = {
    videos: Array<Video>
}

const VideoList = function (props: Props) {

    const videoItems = props.videos
    .map(v => 
        <Link key={v.id} to={"/detail/" + v.id}>
            <VideoItem video={v} />
        </Link>
    );

    return (
        <div className="video-list">{videoItems}</div>
    );
}

export default VideoList;