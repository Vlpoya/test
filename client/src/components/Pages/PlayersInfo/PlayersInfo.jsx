import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardMedia, TextField } from '@mui/material';
import { findPlayers } from '../../../redux/reducer/playersSlice';
import '../main.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PlayersInfo() {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({ id: '' });
  const changeHandler = (el) => {
    dispatch(findPlayers({ el }));
  };
  const players = useSelector((store) => store.players.value);

  return (

    <>
      <br />
      {' '}
      <br />
      <div className="search">
        {' '}
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            display: 'flex',
          }}
        >
          <TextField
            fullWidth
            label="type here"
            id="fullWidth"
            value={input.id}
            onChange={(e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="id"
            type="text"
          />
          <Button onClick={() => changeHandler(input)} color="primary">
            Find
            {' '}
            <br />
          </Button>
        </Box>

      </div>

      <Grid container spacing={4}>
        <Grid xs={6} md={1}>
          <Item>#</Item>
        </Grid>
        <Grid xs={6} md={1}>
          <Item>Ava</Item>
        </Grid>
        <Grid xs={6} md={5}>
          <Item>Name</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>Score</Item>
        </Grid>
      </Grid>

      {
        players.rankings
          ? players.rankings.map((el) => (
            <Grid container spacing={4}>
              <Grid xs={6} md={1}>
                <Item>{players.rankings.indexOf(el) + 1}</Item>
              </Grid>
              <Grid xs={6} md={1}>
                <Item>
                  <CardMedia
                    component="img"
                    height={20}
                    width={20}
                    image={`${el.avatar}`}
                    alt="green iguana"
                  />
                </Item>
              </Grid>
              <Grid xs={6} md={5}>
                <Item>{el.personaname}</Item>
              </Grid>
              <Grid xs={6} md={4}>
                <Item>
                  {' '}
                  {el.score}
                </Item>
              </Grid>
            </Grid>
          ))
          : (
            <Grid xs={6} md={3} className="noname">
              <Item>No names found ...</Item>
            </Grid>
          )

      }
    </>

  );
}
