import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Series from './components/Series';
import AgregarSerie from './components/Agregar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CustomNavbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/series' component={Series} />
            <Route path='/agregar' component={AgregarSerie} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
