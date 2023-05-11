import React from 'react';
import { formatAgo } from '../utils/timeago';
//  <VideoCard key={video.id} video={video} />
//  videos 페이지에서 위와 같이 비디오에 관한 정보들을 네트워크 통신을 통해 받아왔다. 그 후 사용하기 위해 prop 으로 전달받아 사용한다!

export default function VideoCard({ video }) {
  const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div className=''>
        <p>{title}</p>
        <p> {channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
