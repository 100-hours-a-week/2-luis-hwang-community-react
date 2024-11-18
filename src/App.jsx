import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BoardList from './pages/BoardList'
import Login from './pages/Login'
import BoardDetail from './pages/BoardDetail'
import BoardEdit from './pages/BoardEdit'
import Layout from './layout/Layout'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<BoardList />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/board/:boardId' element={<BoardDetail />} />
            <Route path='/board/edit/:boardId' element={<BoardEdit />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
