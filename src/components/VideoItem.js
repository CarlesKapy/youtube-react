import React from 'react';
import './VideoItem.css';

const VideoItem = function (props) {
    
    return (
        <div className="video-item">
            <h3>{props.video.title}</h3>
            <img src={props.video.thumbnail} alt={props.video.title}/>
        </div>
    );
}

export default VideoItem;