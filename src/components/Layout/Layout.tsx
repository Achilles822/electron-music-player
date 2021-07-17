import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactHowler from 'react-howler';
import Slide from '@material-ui/core/Slide';
import BottomBar from '../BottomBar/BottomBar';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Cover from '../Cover/Cover';
import useHowlerModel from '../../models/howl';
import useGlobalModel from '../../models/global';
import { IPage } from '../../types/global';
import styles from './Layout.scss';

const Layout = () => {
  const [open, setOpen] = useState(false);
  const {
    setSongList,
    songList,
    listIndex,
    playingIndex,
    isPlaying,
    volume,
    seek,
    setSeek,
    setIsPlaying,
    setPosition,
    setPlayingIndex,
    setLoaded,
  } = useHowlerModel();

  const { page } = useGlobalModel();

  const [title, setTitle] = useState('');

  const [pageAnimation, setPageAnimation] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = () => {
    setSongList((old) => [...old, { title, list: [] }]);
    handleClose();
  };
  const onDialog = () => {
    setOpen(true);
  };

  const playerRef = useRef();

  useEffect(() => {
    if (seek > 0) {
      (playerRef as any).current.seek(seek);
    }
  }, [seek]);

  useEffect(() => {
    setPageAnimation((prev) => !prev);
  }, [page]);

  useEffect(() => {
    setSeek(0);
  }, [playingIndex]);

  const handleEnd = () => {
    setPosition(0);
    if (playingIndex < songList[listIndex].list.length - 1) {
      setPlayingIndex(playingIndex + 1);
      return;
    }
    setIsPlaying(false);
  };

  const handleLoaded = () => {
    setLoaded(true);
  };
  return (
    <div className={styles.windowContainer}>
      {songList.length > 0 && songList[listIndex].list.length ? (
        <ReactHowler
          // src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
          src={songList[listIndex].list[playingIndex].src}
          playing={isPlaying}
          volume={volume / 100}
          onEnd={handleEnd}
          onLoad={handleLoaded}
          ref={playerRef}
          id="howler"
        />
      ) : null}

      {page === IPage.列表 ? (
        <div className={styles.top}>
          <Sidebar onDialog={onDialog} />
          <Main />
        </div>
      ) : (
        <Slide direction="up" in={pageAnimation} mountOnEnter unmountOnExit>
          <div className={styles.top}>
            <Cover />
          </div>
        </Slide>
      )}

      <div>
        <BottomBar />
      </div>
      <Dialog open={open} onClose={handleClose} fullWidth={false} maxWidth="sm">
        <DialogTitle>新建歌单</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            placeholder="请输入列表名称"
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleCreate}>创建</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Layout;
