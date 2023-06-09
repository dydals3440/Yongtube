import React from 'react';
import { formatAgo } from '../utils/timeago';
import { useNavigate } from 'react-router-dom';
//  <VideoCard key={video.id} video={video} />
//  videos 페이지에서 위와 같이 비디오에 관한 정보들을 네트워크 통신을 통해 받아왔다. 그 후 사용하기 위해 prop 으로 전달받아 사용한다!

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { title, thumbnails, publishedAt, channelTitle } = video.snippet;
  const isList = type === 'list';
  return (
    // 이미 video에 관한 정보는 prop을 통해 받아옴, 즉 해당하는 정보들도 같이 전달해야함 react router에서 부가적인 객체를 전달할떄는 2번쨰 인자에 객체를 전달하면 됨 video: video video키에 video value전달
    <li
      // VideoComponent 타입마다 다르게 설정
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => {
        // navigate 사용시 / 홈경로(절대경로)를 명시해주어야함. 안그러면 상대경로로 들어가게 됨
        // 최종루트에서 videos로 들어가게 해야하는데, 그냥 / 없이 작성시 현재 경로에서 추가해줌. 최상위 루트에서 시작하고싶다면 '/'를 붙여서 실행해야함.
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={
          isList
            ? 'w-60 mr-3 hover:scale-125 ase-in duration-300 rounded-md'
            : 'w-full hover:scale-125 ase-in duration-300 rounded-md'
        }
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opactiy-80'> {channelTitle}</p>
        <p className='text-sm opactiy-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
