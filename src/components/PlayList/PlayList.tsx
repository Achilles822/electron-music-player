import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import styles from './PlayList.scss';

import useHowlerModel from '../../models/howl';

const PlayList = (props: any) => {
  const {
    // playingList,
    setPlayingIndex,
    playingIndex,
    isPlaying,
    setIsPlaying,
    listIndex,
    songList,
    viewListIndex,
    setListIndex,
  } = useHowlerModel();
  const handleDelete = (index: number): void => {
    console.log(index);
  };
  const handlePause = (): void => {
    setIsPlaying(false);
  };
  const handlePlay = (index: number): void => {
    setListIndex(viewListIndex);
    setPlayingIndex(index);
    setIsPlaying(true);
  };
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
                    <Avatar
                      alt="Remy Sharp"
                      src={song.coverBase64 ? song.coverBase64 : null}
                    />
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
