import MainProvider from '../app/providers/MainProvider';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return(
    <MainProvider>
      <AnyComponent {...pageProps} />
    </MainProvider>
  ) 
    
}
