import React from 'react';
import styles from './PlayControl.scss';
import Icon from '../Icon/Icon';
import useHowlerModel from '../../models/howl';

const PlayControl = (props: any) => {
  const { isPlaying, setIsPlaying } = useHowlerModel();
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className={styles.container}>
      <Icon className={styles.icon} icon="#icon-ArrowPrevious" />
      <Icon
        className={styles['icon-play']}
        icon={isPlaying ? '#icon-Pause-1' : '#icon-Play'}
        onClick={handlePlay}
      />
      <Icon className={styles.icon} icon="#icon-ArrowNext" />
    </div>
  );
};
export default PlayControl;
