import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>로딩중입니다</p>}
      {error && <p>뭔가 에러가 발생했습니다</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            // videoCard 컴포넌트를 사용하는데 좀 다르게 변형하고싶을때 type이라는 키워드를 줌
            // 기존에는 비디오카드 밑에 정보가 나오는데, 이제는 오른쪽에 나오게 연관된 비디오를 설정하고 싶다.
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}
