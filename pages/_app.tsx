import type { AppProps } from 'next/app'
import '../i18n';
import 'normalize.css'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import Script from 'next/script';
import { ThemeProvider } from "styled-components";
import { useState } from 'react';
import { defaultTheme, GlobalStyles } from '../styles/theming'
import { verifyHost } from '../utils/utils';


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("default") 

  const toggleTheme = () => {
    theme == 'default' ? setTheme('default') : setTheme('default')
  }

  return (
    verifyHost() ? 
    <ThemeProvider theme={theme == 'default' ? defaultTheme : defaultTheme}>
      <DefaultSeo {...SEO} />
      <Script src='https://hm.baidu.com/hm.js?401f06829c944c1308fcb2f4b09d8539'>
      </Script>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
    : <></>
  )
}

export default MyApp
