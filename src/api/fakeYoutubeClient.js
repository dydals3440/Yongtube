import axios from 'axios';

export default class FakeYoutubeClient {
  // 생성시 아무것도 전달하지 않아도됨
  constructor() {}
  async search() {
    return axios.get('/videos/search.json');
  }
  async videos() {
    return axios.get('/videos/popular.json');
  }
}

//// async 이고 클래스 멤버 함수 이므로 function 키워드 적지 않아도됨!
// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? 'search' : 'popular'}.json`) //
//     .then((res) => res.data.items);
// }
