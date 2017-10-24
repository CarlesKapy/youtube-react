// @flow

import React from 'react';
import './VideoItem.css';

type Video = {
    id: string,
    title: string,
    thumbnail: string,
};

type Props = {
    video: Video
};

const VideoItem = function (props: Props) {
    
    return (
        <div className="video-item">
            <h3>{props.video.title}</h3>
            <img src={props.video.thumbnail} alt={props.video.title}/>
        </div>
    );
}

export default VideoItem;