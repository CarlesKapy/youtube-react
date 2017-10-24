// @flow

import React from 'react';
import './VideoItem.css';
import Video from './types'

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