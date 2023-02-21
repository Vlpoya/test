import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { setDeletePic } from '../../../redux/reducer/myPicSlice';

export default function Myfavorite() {
  const heroes = useSelector((store) => store.myPic.value);

  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(setDeletePic(id));
  };

  return (
    <div className="container">

      {heroes.map((el) => (
        <Card sx={{ width: 260, height: 353, margin: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`https://api.opendota.com${el.img}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.localized_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Role:
                {' '}
                {el.roles.join(', ')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Attac type:
                {' '}
                {el.attack_type}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => deleteHandler(el.id)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
      ;
    </div>
  );
}
