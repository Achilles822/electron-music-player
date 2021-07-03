import React from 'react';
import ReactHowler from 'react-howler';
import styles from './BottomBar.scss';
import PlayControl from '../PlayControl/PlayControl';
import Volume from '../Volume/Volume';
import useHowlerModel from '../../models/howl';

const BottomBar = () => {
  const {
    playingSrc,
    isPlaying,
    playingIndex,
    playingList,
    volume,
  } = useHowlerModel();
  return (
    <div className={styles.barContainer}>
      <PlayControl isPlaying={isPlaying} />
      {playingList.length ? (
        <ReactHowler
          // src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
          src={playingList[playingIndex].src}
          playing={isPlaying}
          volume={volume / 100}
        />
      ) : null}
      <Volume />
    </div>
  );
};

export default BottomBar;
