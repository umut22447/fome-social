import React from 'react'
import PostList from './components/PostList'
import Register from './components/Register'
import { useAuth } from './contexts/AuthContext'

export default function App() {
  const { user } = useAuth();
  return (
    <div>
      { user === null ? <Register /> : <PostList /> }
    </div>
  )
}
