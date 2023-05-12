// di 주입 this.apiClient = apiClient; 외부로 부터 주입받은 apiClient를 사용
import axios from 'axios';

export class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }
  async search(params) {
    return this.httpClient.get('search', params);
  }

  async videos(params) {
    return this.httpClient.get('videos', params);
  }
  async channels(params) {
    return this.httpClient.get('channels', params);
  }
}
