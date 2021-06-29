import React, { FC, useEffect } from 'react';
import { Howl } from 'howler';
import * as musicMetadata from 'music-metadata-browser';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import BottomBar from '../BottomBar/BottomBar';
import styles from './Layout.scss';

const Layout = () => {
  
  return (
    <div className={styles.windowContainer}>
      <div className={styles.top}>
        <Sidebar />
        <Main />
      </div>
      <div className={styles.bottom}>
        <BottomBar />
      </div>

    </div>
  );
};

export default Layout;
