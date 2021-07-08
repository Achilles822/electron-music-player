import React from 'react';
import PlayList from '../PlayList/PlayList';
import styles from './Main.scss';

const Main = () => {
  return (
    <div className={styles['main-container']}>
      <PlayList />
    </div>
  );
};

export default Main;
