import { useState } from 'react';
import { createModel } from 'hox';

function useHowler() {
  // const [playingSrc, setPlayingSrc] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(0);
  // const [metaData, setMetaData] = useState({});
  const [playingList, setPlayingList] = useState<any>([]);
  const [volume, setVolume] = useState(30);
  const [seek, setSeek] = useState(0);
  return {
    // playingSrc,
    // setPlayingSrc,
    isPlaying,
    setIsPlaying,
    // metaData,
    // setMetaData,
    playingIndex,
    setPlayingIndex,
    playingList,
    setPlayingList,
    volume,
    setVolume,
    seek,
    setSeek,
  };
}
export default createModel(useHowler);
