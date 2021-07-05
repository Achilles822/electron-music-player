import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import { Row, Item } from '@mui-treasury/components/flex';
// import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
// import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import styles from './PlayInfo.scss';

import useHowlerModel from '../../models/howl';

const PlayInfo = (props: any) => {
  const { playingList, playingIndex, isPlaying } = useHowlerModel();
  return (
    <div className={styles['info-container']}>
      {playingList.length > 0 ? (
        <div className={styles['info-wrapper']}>
          <Avatar
            src={playingList[playingIndex].coverBase64}
            className={isPlaying ? styles.rotate : ''}
          />
          <div className={styles['text-block']}>
            <span className={styles.title}>
              {playingList[playingIndex].common.title}
            </span>
            <span className={styles.artist}>
              {playingList[playingIndex].common.artist}
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default PlayInfo;