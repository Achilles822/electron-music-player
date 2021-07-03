import React from 'react';
import useHowlerModel from '../../models/howl';
import Icon from '../Icon/Icon';
import styles from './PlayControl.scss';

const PlayControl = (props: any) => {
  const {
    isPlaying,
    setIsPlaying,
    playingList,
    playingIndex,
    setPlayingIndex,
  } = useHowlerModel();

  const len = playingList.length;
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const handlePrevious = () => {
    if (playingIndex <= 0) return;
    const newIndex = playingIndex - 1;
    setPlayingIndex(newIndex);
  };
  const handleNext = () => {
    if (playingIndex >= len - 1) return;
    const newIndex = playingIndex + 1;
    setPlayingIndex(newIndex);
  };
  return (
    <div className={styles.container}>
      <Icon
        className={styles.icon}
        icon="#icon-ArrowPrevious"
        onClick={handlePrevious}
      />
      <Icon
        className={styles['icon-play']}
        icon={isPlaying ? '#icon-Pause-1' : '#icon-Play'}
        onClick={handlePlay}
      />
      <Icon
        className={styles.icon}
        icon="#icon-ArrowNext"
        onClick={handleNext}
      />
    </div>
  );
};
export default PlayControl;
