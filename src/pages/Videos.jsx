import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import FakeYoutube from '../api/fakeYoutube';
import { Youtube } from '../api/youtube';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div>Videos {keyword ? `🍿${keyword}` : `🎉Hot Trend Video`}</div>
      {isLoading && <p>로딩중입니다</p>}
      {error && <p>뭔가 에러가 발생했습니다</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
