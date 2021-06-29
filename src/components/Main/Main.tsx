import React from 'react';
import * as musicMetadata from 'music-metadata-browser';

import useHowlerModel from '../../models/howl';

const Main = () => {
  const { setPlayingSrc, setIsPlaying, setMetaData } = useHowlerModel();
  const parseFile = async (file: any) => {
    console.log(`Parsing file "${file.name}" of type ${file.type}`);
    return musicMetadata
      .parseBlob(file, { native: true })
      .then((metadata: any) => {
        console.log(`Completed parsing of ${file.name}:`, metadata);
        // return metadata;
        setMetaData(metadata);
      });
  };

  const onFileChange = (e: any) => {
    // console.log(e.target.files);
    const path = e.target.files[0].path as any;
    // console.log(path);
    parseFile(e.target.files[0]);
    setPlayingSrc(path);
    setIsPlaying(true);
  };
  return (
    <h1>
      <input type="file" onChange={onFileChange} />
    </h1>
  );
};

export default Main;
