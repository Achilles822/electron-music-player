import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';
import Icon from '../Icon/Icon';
import useHowlerModel from '../../models/howl';
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
      <IconButton aria-label="previous" onClick={handlePrevious}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton aria-label="play/pause" onClick={handlePlay}>
        {isPlaying ? (
          <PauseIcon sx={{ height: 38, width: 38 }} />
        ) : (
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        )}
      </IconButton>
      <IconButton aria-label="next" onClick={handleNext}>
        <SkipNextIcon />
      </IconButton>
      {/* <Icon
        className={styles.icon}
        icon="#icon-ArrowPrevious"
        onClick={handlePrevious}
      /> */}
    </div>
  );
};
export default PlayControl;
