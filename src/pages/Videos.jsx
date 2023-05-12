import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));
  return (
    <>
      <div>Videos {keyword ? `🍿${keyword}` : `🎉Hot Trend Video`}</div>
      {isLoading && <p>로딩중입니다</p>}
      {error && <p>뭔가 에러가 발생했습니다</p>}
      {videos && (
        <ul
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'
        >
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
