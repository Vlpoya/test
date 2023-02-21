import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DataContext } from '../../../Context/DataContext';

export default function EditUser() {
  const { user, updateUser, handleLogout } = useContext(DataContext);
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({ name: '', email: '' });

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = () => {
    updateUser(user.id, input);
    handleClose();
    handleLogout();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="text" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit your data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type text below
          </DialogContentText>
          <TextField
            value={input.name}
            onChange={(e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            id="exampleName"
            name="name"
            label="Username"
            type="text"
            fullWidth
          />

          <TextField
            value={input.email}
            onChange={(e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            id="exampleEmail"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={changeHandler} color="primary">
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
