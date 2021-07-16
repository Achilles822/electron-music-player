/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, forwardRef } from 'react';

import useHowlerModel from '../../models/howl';

const Cover = (props) => {
  const {
    wave,
    isPlaying,
    songList,
    listIndex,
    playingIndex,
    volume,
  } = useHowlerModel();

  // const canvasRef = React.useRef(null);

  useEffect(() => {
    const options = {
      type: 'bars',
    };
    // console.log(props.testRef);

    if (isPlaying) {
      (document.getElementById('audio') as HTMLAudioElement).play();
      wave.fromElement('audio', 'canvas', options);
    } else if (songList.length > 0) {
      (document.getElementById('audio') as HTMLAudioElement).pause();
    }
  }, [isPlaying, playingIndex]);

  useEffect(() => {
    if (songList.length > 0) {
      (document.getElementById('audio') as HTMLAudioElement).volume =
        volume / 100;
    }
  }, [volume]);

  return (
    <div>
      <canvas id="canvas" height="500" width="500" />
      {/* <audio
        id="audio"
        src="https://m8.music.126.net/21180815163607/04976f67866d4b4d11575ab418904467/ymusic/515a/5508/520b/f0cf47930abbbb0562c9ea61707c4c0b.mp3?infoId=92001"
        autoPlay
      /> */}
      {songList.length > 0 && songList[listIndex].list.length ? (
        <audio
          id="audio"
          src={songList[listIndex].list[playingIndex].src}
          style={{ display: 'none' }}
        />
      ) : null}
    </div>
  );
};

export default Cover;
