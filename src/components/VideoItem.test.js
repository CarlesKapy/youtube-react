import React from 'react'
import { shallow } from 'enzyme'
import VideoItem from './VideoItem'
import type { Video } from './types'

describe ('VideoItem', () => {
    it('renders correctly', () => {
        const video = {
            "id": "4TPqUvy1vYU", 
            "thumbnail": "https://i.ytimg.com/vi/4TPqUvy1vYU/mqdefault.jpg",
            "title": "St. Vincent - New York (Official Video)"
        };
        const component = shallow(<VideoItem video = {video} />)
        expect(component).toMatchSnapshot();
    })
    
})