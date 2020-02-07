import React, {Component} from 'react';
import Layout from './components/Layout/Layout.js';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';


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
            <BurgerBuilder showSideDraw = {this.state.showSideDrawer} closeSideDraw = {this.sideDrawerClosedHandler}>
  
            </BurgerBuilder>
        </Layout>
      </div>
    )
  }


}

export default App;
