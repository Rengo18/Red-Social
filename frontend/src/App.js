import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import './global.css';


function App() {
  return (
    <Router>
 
      <Route path="/" exact component={Login} />
      <Route path="/Register"  exact component={Register}/>

</Router>
      
  );
}

export default App;
