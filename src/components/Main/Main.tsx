import React, { useEffect } from 'react';
import PlayList from '../PlayList/PlayList';
import useHowlerModel from '../../models/howl';
import { getFileMedadata, convertBufferToBase64 } from '../../utils/file';
import styles from './Main.scss';

const Main = () => {
  const {
    setIsPlaying,
    setSongList,
    songList,
    setSeek,
    listIndex,
    viewListIndex,
  } = useHowlerModel();
  const onFileChange = async (e: any) => {
    const { files } = e.target;
    const fileList: any = [];
    await Promise.all(
      [...files].map(async (file: File) => {
        const info = await getFileMedadata(file);
        const { picture } = info.common;
        let coverBase64;
        if (picture && picture.length) {
          coverBase64 = convertBufferToBase64(info.common.picture[0]);
        } else {
          coverBase64 = '';
        }
        fileList.push({ ...info, src: file.path, coverBase64 });
      })
    );
    console.log(fileList);
    const newList = [...songList];
    newList[viewListIndex].list = [
      ...songList[viewListIndex].list,
      ...fileList,
    ];
    setSongList(newList);
    setSeek(0);
    setIsPlaying(true);
  };
  return (
    <div className={styles['main-container']}>
      <h1>
        <input type="file" onChange={onFileChange} multiple />
      </h1>
      <PlayList />
    </div>
  );
};

export default Main;
