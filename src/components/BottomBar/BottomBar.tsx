import React from 'react';
import ReactHowler from 'react-howler';
import styles from './BottomBar.scss';
import PlayControl from '../PlayControl/PlayControl';
import useHowlerModel from '../../models/howl';

const BottomBar = () => {
  const { playingSrc, isPlaying } = useHowlerModel();
  return (
    <div className={styles.barContainer}>
      <PlayControl isPlaying={isPlaying} />
      <ReactHowler
        // src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
        src={playingSrc}
        playing={isPlaying}
      />
    </div>
  );
};

export default BottomBar;
