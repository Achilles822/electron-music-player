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
    // playingList,
    songList,
    volume,
    seek,
    setSeek,
    setPosition,
    setIsPlaying,
    listIndex,
  } = useHowlerModel();
  const playerRef = useRef();
  useEffect(() => {
    if (seek > 0) {
      (playerRef as any).current.seek(seek);
    }
  }, [seek]);

  useEffect(() => {
    setSeek(0);
  }, [playingIndex]);
  const handleEnd = () => {
    setPosition(0);
    if (playingIndex < songList[listIndex].list.length - 1) {
      setPlayingIndex(playingIndex + 1);
      return;
    }
    setIsPlaying(false);
  };
  return (
    <div className={styles.barContainer}>
      <TimeIndicator />
      <PlayInfo />
      <PlayControl isPlaying={isPlaying} />
      {songList.length > 0 && songList[listIndex].list.length ? (
        <ReactHowler
          // src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
          src={songList[listIndex].list[playingIndex].src}
          playing={isPlaying}
          volume={volume / 100}
          onEnd={handleEnd}
          ref={playerRef}
        />
      ) : null}
      <Volume />
    </div>
  );
};

export default BottomBar;
