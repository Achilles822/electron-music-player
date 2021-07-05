import React, { useEffect, useRef, useState } from 'react';
import ReactHowler from 'react-howler';
import styles from './BottomBar.scss';
import PlayInfo from '../PlayInfo/PlayInfo';
import PlayControl from '../PlayControl/PlayControl';
import Volume from '../Volume/Volume';
import TimeIndicator from '../TimeIndicator/TimeIndicator';
import useHowlerModel from '../../models/howl';

const BottomBar = () => {
  const {
    isPlaying,
    playingIndex,
    setPlayingIndex,
    playingList,
    volume,
    seek,
    setSeek,
  } = useHowlerModel();
  const playerRef = useRef();
  // const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (seek > 0) {
      (playerRef as any).current.seek(seek);
    }
  }, [seek]);

  useEffect(() => {
    setSeek(0);
  }, [playingIndex]);

  // const handleOnLoad = () => {
  //   console.log('loaded');
  //   setLoaded(true);
  // };
  const handleEnd = () => {
    console.log('end');
    if (playingIndex < playingList.length - 1) {
      setPlayingIndex(playingIndex + 1);
    }
  };
  return (
    <div className={styles.barContainer}>
      <TimeIndicator />
      <PlayInfo />
      <PlayControl isPlaying={isPlaying} />
      {playingList.length ? (
        <ReactHowler
          // src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
          src={playingList[playingIndex].src}
          playing={isPlaying}
          volume={volume / 100}
          // onLoad={handleOnLoad}
          onEnd={handleEnd}
          ref={playerRef}
        />
      ) : null}
      <Volume />
    </div>
  );
};

export default BottomBar;
