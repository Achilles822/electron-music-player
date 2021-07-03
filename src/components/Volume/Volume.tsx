import React from 'react';
import Box from '@material-ui/core/Box';
import Stack from '@material-ui/core/Stack';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import styles from './Volume.scss';
import useHowlerModel from '../../models/howl';

const Volume = (props: any) => {
  const { volume, setVolume } = useHowlerModel();
  const handleChange = (event: any, newValue: any) => {
    setVolume(newValue);
  };

  return (
    <div className={styles['vol-container']}>
      <VolumeDown />
      <Slider aria-label="Volume" value={volume} onChange={handleChange} />
      <VolumeUp />
    </div>
  );
};

export default Volume;
