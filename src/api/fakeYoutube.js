import axios from 'axios';

export default class FakeYoutube {
  // 생성시 아무것도 전달하지 않아도됨
  constructor() {}
  async search(keyword) {
    // #은 자바스크립트에서 private 함수 클래스 내부적 호출 가능, 외부 호출 X
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search.json`) //
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
    // item을 쭉 나열해서, id만 변경해주고 싶은데, id를 기존의 객체 형태가 아닌, item.id.videoId 즉, videoId부분을 id로 변경해 줄 것이다.
  }
  async #mostPopular() {
    return axios
      .get(`/videos/search.json`) //
      .then((res) => res.data.items);
  }
}

//// async 이고 클래스 멤버 함수 이므로 function 키워드 적지 않아도됨!
// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? 'search' : 'popular'}.json`) //
//     .then((res) => res.data.items);
// }
