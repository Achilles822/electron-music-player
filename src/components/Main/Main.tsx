import React, { useEffect } from 'react';
import useHowlerModel from '../../models/howl';
import { getFileMedadata } from '../../utils/file';

const Main = () => {
  const {
    setPlayingSrc,
    setIsPlaying,
    setMetaData,
    playingSrc,
  } = useHowlerModel();
  const parseFile = async (file: any) => {
    const info = await getFileMedadata(file);
    console.log(info);
    setMetaData(info);
  };
  useEffect(() => {
    console.log(playingSrc);
  }, [playingSrc]);
  const onFileChange = (e: any) => {
    const { files } = e.target;
    const paths: string[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < files.length; i++) {
      paths.push(files[i].path);
    }
    console.log(paths);
    setPlayingSrc((old) => [...old, ...paths]);
    setIsPlaying(true);
    // console.log(playingSrc);
    // console.log(e.target.files);
    // const path = e.target.files[0].path as any;
    // console.log(path);
    // parseFile(e.target.files[0]);
  };
  return (
    <h1>
      <input type="file" onChange={onFileChange} />
    </h1>
  );
};

export default Main;
