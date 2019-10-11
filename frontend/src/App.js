import React from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Banners from './components/Banners.js'
import Drawings from './components/Drawings.js'
import Drawings1 from './components/Drawings1.js'
import Paintings from './components/Paintings.js'
import NavBar from './components/NavBar.js'

function App() {
    return (
      <div className="App">
      <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/banners' component={Banners} />
          <Route path='/paintings' component={Paintings} />
          <Route exact path='/drawings/nose-1' component={Drawings1} />
          <Route exact path='/drawings' component={Drawings} />


        </Switch>
      </div>
    )

}

export default App;
