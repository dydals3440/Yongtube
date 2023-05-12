import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
export default function VideoDetail() {
  //  video 정보를읽음
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  console.log(video);
  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder='0'
          title={title}
        />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          {/* pre태그 여백 공백 적절히 */}
          {/* pre사이즈떄문에 basis가 적용이 안됨, pre-wrap을 통해 container에 맞춰서 너비 설정 */}
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6'>
        {/* VideoId와 연관된 비디오를 만듬. */}
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
