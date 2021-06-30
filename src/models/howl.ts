import { useState } from 'react';
import { createModel } from 'hox';

function useHowler() {
  const [playingSrc, setPlayingSrc] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [metaData, setMetaData] = useState({});
  return {
    playingSrc,
    setPlayingSrc,
    isPlaying,
    setIsPlaying,
    metaData,
    setMetaData,
    playingIndex,
    setPlayingIndex,
  };
}
export default createModel(useHowler);
