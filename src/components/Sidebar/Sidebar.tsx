import React, { useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import styles from './Sidebar.scss';
import useHowlerModel from '../../models/howl';
import { getFileMedadata, convertBufferToBase64 } from '../../utils/file';

type Iprops = {
  onDialog: () => void;
};
const Sidebar = (props: Iprops) => {
  const { onDialog } = props;
  const fileRef = useRef<HTMLInputElement>();
  const {
    songList,
    setViewListIndex,
    viewListIndex,
    setSongList,
    setSeek,
  } = useHowlerModel();
  const handleClickAdd = () => {
    onDialog();
  };
  const handleClickItem = (index: number) => {
    setViewListIndex(index);
  };
  const handleClickAddSong = () => {
    fileRef.current.click();
  };
  const onFileChange = async (e: any) => {
    const { files } = e.target;
    const fileList: any = [];
    await Promise.all(
      [...files].map(async (file: File) => {
        const info = await getFileMedadata(file);
        const { picture } = info.common;
        let coverBase64;
        if (picture && picture.length) {
          coverBase64 = convertBufferToBase64(info.common.picture[0]);
        } else {
          coverBase64 = '';
        }
        fileList.push({ ...info, src: file.path, coverBase64 });
      })
    );
    const newList = [...songList];
    newList[viewListIndex].list = [
      ...songList[viewListIndex].list,
      ...fileList,
    ];
    setSongList(newList);
    setSeek(0);
    // setIsPlaying(true);
  };
  useEffect(() => {
    console.log(songList);
  }, [songList]);
  return (
    <div className={styles.sidebarContainer}>
      <Button
        variant="text"
        className={styles['btn-add']}
        onClick={handleClickAddSong}
      >
        添加歌曲
      </Button>
      <Button
        variant="text"
        className={styles['btn-add']}
        onClick={handleClickAdd}
      >
        新增列表
      </Button>
      <input
        type="file"
        onChange={onFileChange}
        multiple
        ref={fileRef}
        style={{ display: 'none' }}
      />
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
