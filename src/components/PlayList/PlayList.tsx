import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import styles from './PlayList.scss';

import useHowlerModel from '../../models/howl';

const PlayList = () => {
  const {
    setPlayingIndex,
    playingIndex,
    isPlaying,
    setIsPlaying,
    listIndex,
    songList,
    viewListIndex,
    setListIndex,
    setSongList,
  } = useHowlerModel();

  const [modalOpen, setModalOpen] = useState(false);

  const [deleteIndex, setDeleteIndex] = useState(-1);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleDelete = (index: number): void => {
    console.log(index);
    setDeleteIndex(index);
    handleModalOpen();
  };
  const handleConfirmDelete = (): void => {
    let newSongList = JSON.parse(JSON.stringify(songList));
    if (playingIndex === deleteIndex) {
      setIsPlaying(false);
    }
    newSongList[listIndex].list.splice(deleteIndex, 1);
    setSongList(newSongList);
    handleModalClose();
  };
  const handlePause = (): void => {
    setIsPlaying(false);
  };
  const handlePlay = (index: number): void => {
    setListIndex(viewListIndex);
    setPlayingIndex(index);
    setIsPlaying(true);
  };

  const handleModalClose = (): void => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            是否从歌单删除此歌曲？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>取消</Button>
          <Button onClick={handleConfirmDelete} autoFocus>
            确认
          </Button>
        </DialogActions>
      </Dialog>
      <List>
        {songList.length > 0 && songList[viewListIndex].list.length > 0
          ? songList[viewListIndex].list.map((song: any, index: number) => {
              return (
                <ListItem
                  alignItems="flex-start"
                  key={song.src}
                  className={playingIndex === index ? styles.active : ''}
                  secondaryAction={
                    <div>
                      {' '}
                      <IconButton edge="end">
                        {viewListIndex === listIndex &&
                        playingIndex === index &&
                        isPlaying ? (
                          <PauseIcon
                            onClick={() => {
                              handlePause();
                            }}
                          />
                        ) : (
                          <PlayArrowIcon
                            onClick={() => {
                              handlePlay(index);
                            }}
                          />
                        )}
                      </IconButton>
                      <IconButton
                        edge="end"
                        onClick={() => {
                          handleDelete(index);
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </div>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={song.coverBase64 ? song.coverBase64 : null} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={song.common.title}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {song.common.artist}-
                        </Typography>
                        {song.common.album}
                      </>
                    }
                  />
                </ListItem>
              );
            })
          : null}
      </List>
    </Box>
  );
};
export default PlayList;
