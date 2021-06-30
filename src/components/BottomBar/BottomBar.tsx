import React from 'react';
import ReactHowler from 'react-howler';
import styles from './BottomBar.scss';
import PlayControl from '../PlayControl/PlayControl';
import useHowlerModel from '../../models/howl';

const BottomBar = () => {
  const { playingSrc, isPlaying, playingIndex } = useHowlerModel();
  return (
    <div className={styles.barContainer}>
      <PlayControl isPlaying={isPlaying} />
      {playingSrc.length ? (
        <ReactHowler
          // src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
          src={playingSrc[playingIndex]}
          playing={isPlaying}
        />
      ) : null}
    </div>
  );
};

export default BottomBar;
