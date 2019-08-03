import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import './global.css';


function App() {
  return (
    <Router>
 
      <Route path="/" exact component={Login} />

</Router>
      
  );
}

export default App;
