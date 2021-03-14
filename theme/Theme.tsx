import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const CustomThemeProvider = (props: Props) => {
  return <>
    <ThemeProvider theme={createMuiTheme({
      palette: {
        background: {
          default: '#3C3B54',
        },
        primary: {
          main: '#3C3B54',
        },
        secondary: {
          main: '#BC3939',
        },
        divider: '#EE5123',
        text: {
          primary: '#000',
          secondary: '#FFF',
        },
      },
    })}>
      {props.children}
    </ThemeProvider>
  </>;
};