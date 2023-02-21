import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { addMyPic } from '../../../redux/reducer/myPicSlice';
import { setAsyncPic } from '../../../redux/reducer/pictureSlice';
import HeroInfo from './HeroInfo';
import '../main.css';

export default function Heroes() {
  const heroes = useSelector((store) => store.pictures.value);
  console.log(heroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAsyncPic());
  }, []);

  const changeHandler = (hero) => {
    dispatch(addMyPic(hero));
  };

  return (
    <div className="container">
      {heroes.map((el) => (
        <Card sx={{ width: 260, height: 353, margin: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`https://api.opendota.com${el.img}.png`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.localized_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Roles:
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
              onClick={() => changeHandler(el)}
            >
              Add to favorites
            </Button>
            <HeroInfo
              id={el.id}
              image={`https://api.opendota.com${el.icon}`}
              name={el.localized_name}
              MoveSpeed={el.move_speed}
              Legs={el.legs}
              AttackType={el.attack_type}
            >
              Find out
            </HeroInfo>
          </CardActions>
        </Card>
      ))}
      ;
    </div>
  );
}
