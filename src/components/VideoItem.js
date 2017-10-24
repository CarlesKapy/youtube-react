import React from 'react';
import './VideoItem.css';

const VideoItem = function (props) {
    
    return (
        <div class="video-item">
            <h3>{props.title}</h3>
            <img src={props.thumbnail} alt={props.title}/>
        </div>
    );
}

export default VideoItem;