import React from 'react';
import './App.css';
import MovieBox from './components/MovieBox';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <Router>
<Route   exact path="/" render={()=><Header/>}/>
 <Route exact path="/" component={MovieBox}/>  
 <Route  path='/movie/:id' component={Description}/>   
      </Router>
    </div>
  );
}

export default App;
