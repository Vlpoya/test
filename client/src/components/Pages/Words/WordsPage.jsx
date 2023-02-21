import { Grid, Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function WordsPage() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words);

  // useEffect(() => {
  //   dispatch(setAsyncWord());
  // }, []);

  // useEffect(() => {
  //   let timeOut;
  //   if (input) {
  //     timeOut = setTimeout(() => {
  //       dispatch(getWords({ input }));
  //     }, 2000);
  //   }
  //   return () => {
  //     if (timeOut) {
  //       clearTimeout(timeOut);
  //     }
  //   };
  // }, [input]);

  useEffect(() => {
    if (input) {
      dispatch({
        type: 'GET_WORDS_SAGA',
        payload: { input },
      });
    }
  }, [input]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Input
        placeholder="type a latters"
        onChange={inputHandler}
      />
      <br />
      <br />
      {
        words
          ? words.map((el) => (
            <Grid container spacing={1}>
              <Grid xs={6} md={12}>
                <Item>{el.word}</Item>
              </Grid>
            </Grid>
          ))
          : (
            <Grid xs={6} md={3} className="noname">
              <Item>No words found ...</Item>
            </Grid>
          )
      }

    </>
  );
}
