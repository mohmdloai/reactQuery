import { QueryClient,QueryClientProvider  } from '@tanstack/react-query'
import React from 'react'
import Todo from './components/Todo';
import './index.css'

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>

      <Todo />
    </QueryClientProvider>
  )
}

export default App
