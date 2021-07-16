import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import { Row, Item } from '@mui-treasury/components/flex';
// import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
// import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import styles from './PlayInfo.scss';
import { IPage } from '../../types/global';
import useHowlerModel from '../../models/howl';
import useGlobalModel from '../../models/global';

const PlayInfo = (props: any) => {
  const { songList, playingIndex, isPlaying, listIndex } = useHowlerModel();
  const { page, setPage } = useGlobalModel();

  const handleClick = () => {
    if (page === IPage.列表) {
      setPage(IPage.封面);
    } else if (page === IPage.封面) {
      setPage(IPage.列表);
    }
  };
  return (
    <div className={styles['info-container']}>
      {songList.length > 0 && songList[listIndex].list.length > 0 ? (
        <div className={styles['info-wrapper']}>
          <Avatar
            src={songList[listIndex].list[playingIndex].coverBase64}
            className={isPlaying ? styles.rotate : ''}
            onClick={handleClick}
          />
          <div className={styles['text-block']}>
            <span className={styles.title}>
              {songList[listIndex].list[playingIndex].common.title}
            </span>
            <span className={styles.artist}>
              {songList[listIndex].list[playingIndex].common.artist}
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
