import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MyRoutes } from './router/router'
import { useThemeStore } from './store/ThemeStore'


function App() {
  const {theme} = useThemeStore()
  document.documentElement.classList.toggle('dark', theme === 'dark')
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
         <MyRoutes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
