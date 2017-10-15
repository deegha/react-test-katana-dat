import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import configureStore from './store/configureStore'; 
import { Provider } from 'react-redux';  


/**
 * All the page components
 */
import Header from './components/header/header.js';
import Quotation from './pages/quotation/quotation';
import Someotherpage from './pages/somethingpage';

const store = configureStore();

export default class App extends Component {
  render(){
   return (
   <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        
        <Switch>
          <Route path="/quotation/:product" component={Quotation} exact={true} />
          <Route path="/basic-routing" component={Quotation} exact={true} />
          <Route path="*"  component={()=>{return(<div>Not found</div>)}}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  </Provider>);
  }
}

