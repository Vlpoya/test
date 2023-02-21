import {
  Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../../../Context/DataContext';
import EditUser from './EditUser';

export default function PersonalPage() {
  const { user } = useContext(DataContext);

  return (
    <div className="container">

      {[user].map((el) => (
        <Card sx={{ width: 260, height: 353, margin: 5 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="210"
              image="../../../../public/images.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                email:
                {' '}
                {el.email}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <EditUser
              variant="text"
            >
              Edit
            </EditUser>
          </CardActions>
        </Card>
      ))}
      ;
    </div>
  );
}
