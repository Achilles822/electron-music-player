import { useEffect, useState } from 'react';
import { createModel } from 'hox';
import Wave from '@foobar404/wave';
import { store } from '../store';
import type { ISongList } from '../types/songlist';

function useHowler() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [volume, setVolume] = useState(30);
  const [seek, setSeek] = useState(0);
  const [position, setPosition] = useState(0);
  const [songList, setSongList] = useState<ISongList[]>([]);
  const [listIndex, setListIndex] = useState(0);
  const [viewListIndex, setViewListIndex] = useState(0);
  const [wave] = useState(new Wave());

  useEffect(() => {
    const storeList = store.get('songList') as ISongList[];
    setSongList(storeList);
  }, []);

  useEffect(() => {
    const storeList = store.get('songList') as ISongList[];
    if (songList.length === 0 && storeList.length === 0) {
      setSongList((old) => [...old, { title: '默认列表', list: [] }]);
      setListIndex(0);
    }
    store.set('songList', songList);
  }, [songList]);

  useEffect(() => {
    console.log('set listIndex');
    store.set('listIndex', listIndex);
  }, [listIndex]);

  return {
    isPlaying,
    setIsPlaying,
    playingIndex,
    setPlayingIndex,
    volume,
    setVolume,
    seek,
    setSeek,
    position,
    setPosition,
    songList,
    setSongList,
    listIndex,
    setListIndex,
    setViewListIndex,
    viewListIndex,
    wave,
  };
}
export default createModel(useHowler);
