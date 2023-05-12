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
    <section>
      <article>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder='0'
        />
        <div>
          <h2>{title}</h2>

          <ChannelInfo id={channelId} name={channelTitle} />
          {/* pre태그 여백 공백 적절히 */}
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        {/* VideoId와 연관된 비디오를 만듬. */}
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
