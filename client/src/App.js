import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import Login from './components/Login'
import Home from './components/Home'

import './styles/App.css'
import './styles/main.css'

function App() {
  const u = useSelector((state) => state.auth)
  const loc = window.location.href

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home username={u.username} date={u.date} loc={loc} dir={u.dir} />
          </Route>
          <Route path='/login'  component={Login} />
        </Switch>
        {!u.isloggedin 
          ? <Redirect to='/login' />
          : <Redirect to='/' />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;