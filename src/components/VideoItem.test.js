import React from 'react'
import { shallow } from 'enzyme'
import VideoItem from './VideoItem'
import type { Video } from './types'

describe ('VideoItem', () => {

    const video = {
        "id": "4TPqUvy1vYU", 
        "thumbnail": "https://i.ytimg.com/vi/4TPqUvy1vYU/mqdefault.jpg",
        "title": "St. Vincent - New York (Official Video)"
    };

    it('renders correctly', () => {
        
        const component = shallow(<VideoItem video = {video} />)
        expect(component).toMatchSnapshot();
    })

    it('render image correctly', () => {
        const component = shallow(<VideoItem video={video}/>)
		const image = <img src={video.thumbnail} alt={video.title} />
		expect(component.contains(image)).toBeTruthy()
    })
    
})