import YoutubeUtil from './YoutubeUtil'
import data from '../youtube-api-sample.json'

describe ('Youtubeutil', () => {

    it('extract videos data correctly', () => {
        const videos = YoutubeUtil.extractVideos(data);
        expect(videos.length).toEqual(9);
        expect(videos[0]).toEqual({
            "id": "4TPqUvy1vYU",
            "thumbnail": "https://i.ytimg.com/vi/4TPqUvy1vYU/mqdefault.jpg",
            "title": "St. Vincent - New York (Official Video)"
        });
    })

})