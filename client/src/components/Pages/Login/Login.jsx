// import axios from 'axios';
// import React, { useCallback, useMemo, useState } from 'react';

// const someRendomNumber = () => Math.floor(Math.random() * 100);

// export default function Login() {
//   const num = useMemo(() => someRendomNumber(), []);

//   const [input, setInput] = useState('');
//   const changeHandler = useCallback((e) => {
//     setInput(e.target.value);
//   }, []);
//   console.log(input);

//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
//       />
//       <button
//         onClick={() => changeHandler(input)}
//         type="submit"
//       >
//         ok
//         {' '}
//         <br />
//       </button>
//       <div>{num}</div>
//     </>

//   );
// }

import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../../Context/DataContext';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export default function Login() {
  const { handleLogin } = React.useContext(DataContext);

  return (

    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <form onSubmit={(e) => handleLogin(e, Object.fromEntries(new FormData(e.target)))}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
              // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
              // html input attribute
                name="password"
                type="password"
                placeholder="password"
              />
            </FormControl>
            {/* </Form> */}
            <Button
              sx={{ mt: 1 /* margin top */ }}
              type="submit"
            >
              Log in
            </Button>
          </form>
          <Typography
            endDecorator={<NavLink to="/Signup">Signup</NavLink>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>

  );
}
