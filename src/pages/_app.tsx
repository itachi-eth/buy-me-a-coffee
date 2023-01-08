import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { StarknetConfig, InjectedConnector } from '@starknet-react/core'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import { RefreshContextProvider } from '../contexts/Refresh/context'

export default function App({ Component, pageProps }: AppProps) {
  const connectors = [
    new InjectedConnector({ options: { id: 'argentX' } }),
    new InjectedConnector({ options: { id: 'braavos' } }),
  ]

  const AnyComponent = Component as any
  return (
    <StarknetConfig connectors={connectors}>
      <ToastContainer />
      <RefreshContextProvider>
        <AnyComponent {...pageProps} />
      </RefreshContextProvider>
    </StarknetConfig>
  )
}
