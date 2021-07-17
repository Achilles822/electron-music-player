import React from 'react';
import styles from './BottomBar.scss';
import PlayInfo from '../PlayInfo/PlayInfo';
import PlayControl from '../PlayControl/PlayControl';
import Volume from '../Volume/Volume';
import TimeIndicator from '../TimeIndicator/TimeIndicator';
import useHowlerModel from '../../models/howl';

const BottomBar = () => {
  const { isPlaying } = useHowlerModel();

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
