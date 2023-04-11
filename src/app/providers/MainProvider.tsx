import { QueryClient, QueryClientProvider } from "react-query"
import { FC } from 'react'
import Layout from "../components/layout/Layout"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

const MainProvider: FC = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        {children}
      </Layout>
    </QueryClientProvider>
  )
}

export default MainProvider