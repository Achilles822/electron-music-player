import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import useHowlerModel from '../../models/howl';
import styles from './TimeIndicator.scss';

let intervalTimer = 0;
const TimeIndicator = () => {
  const theme = useTheme();
  const { playingList, playingIndex, isPlaying, setSeek } = useHowlerModel();
  const [position, setPosition] = React.useState(0);
  const [duration, setDuration] = useState(0);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    // eslint-disable-next-line radix
    const secondLeft = parseInt(value - minute * 60);
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  useEffect(() => {
    if (isPlaying) {
      intervalTimer = window.setInterval(() => {
        setPosition((old) => old + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalTimer);
    };
  }, [isPlaying]);
  useEffect(() => {
    if (playingList.length > 0) {
      setDuration(playingList[playingIndex].format.duration);
    }
  }, [playingIndex, playingList]);

  useEffect(() => {
    setPosition(0);
  }, [playingIndex]);
  const onDragSlider = (_: any, value: number) => {
    setPosition(value);
    setSeek(value);
  };
  return (
    <div className={styles.container}>
      <div>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value: any) => onDragSlider(_, value)}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
      </div>
      <div className={styles['time-wrapper']}>
        <span className={styles.start}>{formatDuration(position)}</span>
        <span className={styles.end}>
          {formatDuration(duration - position)}
        </span>
      </div>
    </div>
  );
};
export default TimeIndicator;
