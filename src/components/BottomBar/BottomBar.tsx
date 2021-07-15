import React, { useEffect, useRef, useState } from 'react';
// import ReactHowler from 'react-howler';
import styles from './BottomBar.scss';
import PlayInfo from '../PlayInfo/PlayInfo';
import PlayControl from '../PlayControl/PlayControl';
import Volume from '../Volume/Volume';
import TimeIndicator from '../TimeIndicator/TimeIndicator';
import useHowlerModel from '../../models/howl';

const BottomBar = () => {
  const {
    isPlaying,
    // playingIndex,
    // setPlayingIndex,
    // // playingList,
    // songList,
    // volume,
    // seek,
    // setSeek,
    // setPosition,
    // setIsPlaying,
    // listIndex,
  } = useHowlerModel();
  // const playerRef = useRef();
  // useEffect(() => {
  //   if (seek > 0) {
  //     (playerRef as any).current.seek(seek);
  //   }
  // }, [seek]);

  return (
    <div className={styles.barContainer}>
      <TimeIndicator />
      <PlayInfo />
      <PlayControl isPlaying={isPlaying} />
      <Volume />
    </div>
  );
};

export default BottomBar;
