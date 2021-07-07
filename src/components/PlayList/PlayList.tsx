import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import styles from './PlayList.scss';

import useHowlerModel from '../../models/howl';

const PlayList = (props: any) => {
  const {
    // playingList,
    setPlayingIndex,
    playingIndex,
    setIsPlaying,
    listIndex,
    songList,
    viewListIndex,
    setListIndex,
  } = useHowlerModel();
  const handleClick = (index: number) => {
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
                  onClick={() => {
                    handleClick(index);
                  }}
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
