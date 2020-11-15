import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostList from './components/PostList'
import Register from './components/Register'
import Login from './components/Login'
import { useAuth } from './contexts/AuthContext'

export default function App() {
  const { user } = useAuth();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/register">
            { user === null ? <Register /> : <PostList />}
          </Route>
          <Route exact path="/">
            {user === null ? <Login /> : <PostList />}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
