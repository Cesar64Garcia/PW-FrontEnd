import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getSeasons} from './actions/seriesActions';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Series from './components/Series';
import Serie from './components/Serie';
import AgregarSerie from './components/Agregar'

class App extends Component {
  componentWillMount(){
    this.props.getSeasons();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CustomNavbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/series' component={Series} />
            <Route path='/agregar' component={AgregarSerie} />
            <Route path='/:serie_id' component={Serie}/>
          </Switch>
          <div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state){
  return {
    series: state
  }
}

export default connect(mapStateToProps, {getSeasons})(App);
