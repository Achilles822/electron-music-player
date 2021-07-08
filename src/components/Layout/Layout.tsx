import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BottomBar from '../BottomBar/BottomBar';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import useHowlerModel from '../../models/howl';
import styles from './Layout.scss';

const Layout = () => {
  const [open, setOpen] = useState(false);
  const { setSongList } = useHowlerModel();
  const [title, setTitle] = useState('');

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
  return (
    <div className={styles.windowContainer}>
      <div className={styles.top}>
        <Sidebar onDialog={onDialog} />
        <Main />
      </div>
      <div className={styles.bottom}>
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
