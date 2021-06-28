import React, { FC, useEffect } from 'react';
import { Howl } from 'howler';
import * as musicMetadata from 'music-metadata-browser';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import BottomBar from '../BottomBar/BottomBar';
import styles from './Layout.scss';

const Layout = () => {
  const parseFile = async (file: any) => {
    console.log(`Parsing file "${file.name}" of type ${file.type}`);

    return musicMetadata
      .parseBlob(file, { native: true })
      .then((metadata: any) => {
        console.log(`Completed parsing of ${file.name}:`, metadata);
        return metadata;
      });
  };

  const onFileChange = (e: any) => {
    console.log(e.target.files);
    const path = e.target.files[0].path as any;
    parseFile(e.target.files[0]);
    const sound = new Howl({
      src: [path],
      html5: true,
    });
    sound.play();
  };

  return (
    <div className={styles.windowContainer}>
      <div className={styles.top}>
        <Sidebar />
        <Main />
      </div>
      <div className={styles.bottom}>
        <BottomBar />
      </div>
      {/* <input type="file" onChange={onFileChange} id="file" /> */}
    </div>
  );
};

export default Layout;
