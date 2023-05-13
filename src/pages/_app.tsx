import MainProvider from '../app/providers/MainProvider'
import type { AppProps } from 'next/app'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '../app/assets/styles/globals.scss'

type TypeProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeProps) {
  const AnyComponent = Component as any;
  return(
    <MainProvider Component={Component}>
      <AnyComponent {...pageProps} />
    </MainProvider>
  ) 
    
}
