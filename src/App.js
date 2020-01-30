import React from 'react';
import Layout from './components/Layout/Layout.js';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';


function App() {
  return (
    <div className="App">
      <Layout>
          <BurgerBuilder></BurgerBuilder>

      </Layout>
    </div>
  );
}

export default App;
