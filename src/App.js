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

  render () {
    return (
      <div className="App">
        <Layout open = {this.state.showSideDrawer} sideDrawClose = {this.sideDrawerClosedHandler}>
            <BurgerBuilder showSideDraw = {this.state.showSideDrawer}>
  
            </BurgerBuilder>
        </Layout>
      </div>
    )
  }


}

export default App;
