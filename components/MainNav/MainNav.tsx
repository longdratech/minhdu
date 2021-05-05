import { AppBar, Toolbar } from '@material-ui/core';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar style={{ height: 64 }}>
      {/*<RouterLink to="/">*/}
      {/*  <Logo />*/}
      {/*</RouterLink>*/}
    </Toolbar>
  </AppBar>
);

export default MainNavbar;