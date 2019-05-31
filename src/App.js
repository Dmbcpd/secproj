import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Feed from './components/feed/Feed'
import Channel from './components/feed/Channel'
import SendMessage from './components/feed/SendMessage'
import Vault from './components/vault/Vault'
import SignIn from './components/auth/SignIn'
import Register from './components/auth/Register'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Vault}/>
        <Route path='/feed' component={Feed}/>
        <Route path='/channel/:id' component={Channel}/>
        <Route path='/login' component={SignIn}/>
        <Route path='/register' component={Register}/>
        <Route path='/sendmessage' component={SendMessage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
