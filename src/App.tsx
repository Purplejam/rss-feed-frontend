import React from 'react'
import {GlobalStyle} from './components/GlobalStyles'
import {Nav} from './components/Nav'
import {Home} from './components/Home'



function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
