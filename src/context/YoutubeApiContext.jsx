import { createContext, useContext } from 'react';
import { Youtube } from '../api/youtube';
import { YoutubeClient } from '../api/youtubeClient';
export const YoutubeApiContext = createContext();

// const youtube = new FakeYoutube(); // mock-data 이용 원할 시

// 클라이언트로 코드 리팩토링했으니 아래와 같이 사용
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiContextProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
