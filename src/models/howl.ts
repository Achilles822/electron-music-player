import { useState } from 'react';
import { createModel } from 'hox';

function useHowler() {
  const [playingSrc, setPlayingSrc] = useState('baidu.com');
  const [isPlaying, setIsPlaying] = useState(false);
  const [metaData, setMetaData] = useState({});
  return {
    playingSrc,
    setPlayingSrc,
    isPlaying,
    setIsPlaying,
    metaData,
    setMetaData,
  };
}
export default createModel(useHowler);
