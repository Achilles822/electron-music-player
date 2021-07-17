/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
// import { IPage } from '../../types/global';
import Typography from '@material-ui/core/Typography';
import { usePalette } from 'react-palette';
import useHowlerModel from '../../models/howl';
import styles from './Cover.scss';

const Cover = () => {
  const {
    wave,
    isPlaying,
    songList,
    listIndex,
    playingIndex,
    volume,
    loaded,
  } = useHowlerModel();

  const { data, loading, error } = usePalette(
    songList[listIndex].list[playingIndex].coverBase64
  );

  // const { page } = useGlobalModel();

  // songList[listIndex].list[playingIndex].src
  useEffect(() => {
    const options = {
      type: 'flower',
      colors: ['#fcf18c', '#a1fc84', '#98e5f7', '#e7c2c6', '#d9908c'],
    };
    wave.fromElement('audio', 'canvas', options);
  }, [loaded]);

  useEffect(() => {
    if (isPlaying) {
      (document.getElementById('audio') as HTMLAudioElement).play();
    } else if (songList.length > 0) {
      (document.getElementById('audio') as HTMLAudioElement).pause();
    }
  }, [isPlaying, playingIndex]);

  useEffect(() => {
    if (songList.length > 0) {
      if (volume === 0) {
        (document.getElementById('audio') as HTMLAudioElement).volume = 0;
      } else {
        (document.getElementById('audio') as HTMLAudioElement).volume = 0.01;
      }
    }
  }, [volume]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: data.darkVibrant || '#333' }}
      // style={{
      //   background: `url(${songList[listIndex].list[playingIndex].coverBase64})`,
      //   backgroundSize: 'cover',
      //   filter: `blur(4px)`,
      // }}
    >
      {/* <img className={styles['cover-bg']} src={songList[listIndex].list[playingIndex].coverBase64}/> */}
      <div className={styles['cover-wrapper']}>
        <canvas id="canvas" height="500" width="500" />
        <div
          className={[styles.cover, isPlaying ? styles.rotate : ''].join(' ')}
          style={{
            background: `url(${songList[listIndex].list[playingIndex].coverBase64})`,
            backgroundSize: 'cover',
          }}
        />
        <div />
      </div>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="#fff"
      >
        {songList[listIndex].list[playingIndex].common.artist}
      </Typography>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="#fff"
        fontSize="20px"
      >
        {songList[listIndex].list[playingIndex].common.title}
      </Typography>
      {/* <audio
        id="audio"
        src="https://m8.music.126.net/21180815163607/04976f67866d4b4d11575ab418904467/ymusic/515a/5508/520b/f0cf47930abbbb0562c9ea61707c4c0b.mp3?infoId=92001"
        autoPlay
      /> */}
      {songList.length > 0 && songList[listIndex].list.length ? (
        <audio
          id="audio"
          src={songList[listIndex].list[playingIndex].src}
          style={{ display: 'none' }}
        />
      ) : null}
    </div>
  );
};

export default Cover;
