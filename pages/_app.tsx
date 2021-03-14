import { AppProps } from 'next/app';
import { CustomThemeProvider } from '../theme/Theme';

export default function App({ Component, pageProps }: AppProps) {
  return <CustomThemeProvider>
    <Component {...pageProps} />
  </CustomThemeProvider>
}