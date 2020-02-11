import React, {Component} from 'react';
import Layout from './components/Layout/Layout.js';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';
import Checkout from './containers/checkout/Checkout.js';
import {Route, Switch} from 'react-router-dom';


class App extends Component{

  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer: true});
  }

  render () {
    return (
      <div className="App">
        <Layout open = {this.state.showSideDrawer} sideDrawClose = {this.sideDrawerClosedHandler} menuClicked = {this.sideDrawerOpenHandler} >
          <Switch>
              <Route path ="/checkout" component ={Checkout}/>
              <Route
                path = "/"
                exact
                render = {(props) => <BurgerBuilder {...props} 
                  showSideDraw = {this.state.showSideDrawer} 
                  closeSideDraw = {this.sideDrawerClosedHandler}/>} 
              />
          </Switch>
        </Layout>
      </div>
    )
  }


}

export default App;
