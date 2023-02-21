import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function HeroInfo({
  image, name, MoveSpeed, Legs, AttackType,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const prop = [{ MoveSpeed }, { Legs }, { AttackType }];

  return (
    <div>
      <Button onClick={handleOpen}>Hero info</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <img src={image} alt="" />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Hero:
              {' '}
              {name}
            </Typography>
            {prop?.map((el) => (
              <Typography id="transition-modal-description" sx={{ mt: 4 }}>
                {`${Object.keys(el)}: ${Object.values(el)}`}
              </Typography>
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}