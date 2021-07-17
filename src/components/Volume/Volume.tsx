import React from 'react';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import styles from './Volume.scss';
import useHowlerModel from '../../models/howl';
import { useTheme } from '@material-ui/core/styles';

const Volume = () => {
  const theme = useTheme();

  const { volume, setVolume } = useHowlerModel();
  const handleChange = (event: any, newValue: any) => {
    setVolume(newValue);
  };

  return (
    <div className={styles['vol-container']}>
      <VolumeDown />
      <Slider
        aria-label="Volume"
        value={volume}
        onChange={handleChange}
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
      <VolumeUp />
    </div>
  );
};

export default Volume;
