import React, { useEffect } from 'react';
import useHowlerModel from '../../models/howl';
import { getFileMedadata } from '../../utils/file';

const Main = () => {
  const { setIsPlaying, setPlayingList } = useHowlerModel();
  const onFileChange = async (e: any) => {
    const { files } = e.target;
    const fileList: any = [];
    await Promise.all(
      [...files].map(async (file: File) => {
        const info = await getFileMedadata(file);
        fileList.push({ ...info, src: file.path });
      })
    );
    console.log(fileList);
    setPlayingList(fileList);
    setIsPlaying(true);
  };
  return (
    <h1>
      <input type="file" onChange={onFileChange} multiple />
    </h1>
  );
};

export default Main;
