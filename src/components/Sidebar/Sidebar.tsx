import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import styles from './Sidebar.scss';
import useHowlerModel from '../../models/howl';

type Iprops = {
  onDialog: () => void;
};
const Sidebar = (props: Iprops) => {
  const { onDialog } = props;
  const {
    songList,
    listIndex,
    setViewListIndex,
    viewListIndex,
  } = useHowlerModel();
  const handleClickAdd = () => {
    onDialog();
  };
  const handleClickItem = (index: number) => {
    setViewListIndex(index);
  };
  useEffect(() => {
    console.log(songList);
  }, [songList]);
  return (
    <div className={styles.sidebarContainer}>
      <Button
        variant="text"
        className={styles['btn-add']}
        onClick={handleClickAdd}
      >
        新增列表
      </Button>
      <List dense>
        {songList.map((list, index) => {
          return (
            <ListItem
              key={list.title}
              className={viewListIndex === index ? styles.active : ''}
              onClick={() => handleClickItem(index)}
            >
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary={list.title} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Sidebar;
