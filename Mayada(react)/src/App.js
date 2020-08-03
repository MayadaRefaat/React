import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,BrowserRouter as Router,Route, Switch}from 'react-router-dom'
import Home from './Components/Home';
import Haeder from './Components/Haeder';
import AllUsers from './Components/AllUsers';
import UserDetails from './Components/UserDetails';
import Footer from './Components/Footer';
import About from './About';
import ContactUs from './Components/ContactUs';
import NotFound from './Components/NotFound';
import './stylesheets/footer.css'

function App() {
  return (
 
    <Router>
       <div className="App">
            <Haeder></Haeder>

   <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Contact" component={ContactUs}/>
      <Route exact path="/Users" component={AllUsers}/>
      <Route exact path="/UserDetails" component={UserDetails}/>
     <Route  component={NotFound}/>  
   </Switch>
     
      <Footer></Footer>
      </div>
      
    </Router>
    
    
  );
}

export default App;
