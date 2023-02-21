import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
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

export default function Signup() {
  const [input, setInput] = React.useState({});
  const { setUser } = React.useContext(DataContext);
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = () => {
    axios.post('/api/user/signup', input)
      .then((res) => setUser(res.data))
      .catch(console.log)
      .then(() => {
        window.location.href = '/';
      });
  };

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
            <Typography level="body2">Sign up to start.</Typography>
          </div>
          <FormControl>
            <FormLabel>Nickname</FormLabel>
            <Input
              // html input attribute
              name="name"
              type="text"
              placeholder="Abba"
              value={input.name || ''}
              onChange={inputHandler}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              value={input.email || ''}
              onChange={inputHandler}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              value={input.password || ''}
              onChange={inputHandler}
            />
          </FormControl>

          <Button
            type="submit"
            onClick={submitHandler}
            sx={{ mt: 1 /* margin top */ }}
          >
            Sign up

          </Button>
          <Typography
            endDecorator={<NavLink to="/login">Login</NavLink>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
