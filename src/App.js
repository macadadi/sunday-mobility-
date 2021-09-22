
import './App.css';
import RegisterPage from './Components/RegisterPage';
import UsersList from './Components/UsersList';
import mobility_image from './Components/mobility_image.jpg'
import LoginPage from './Components/LoginPage';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

function App() {
  
 
  return (
    <Router>
    <div className="container">
         <div className="row ">
      
      <div className="col-md-6 left-section">
                <img src={mobility_image}  alt="sunday mobility" className="left-img pb-4"/>
        </div>
        <Switch>
          
          <Route exact path='/login' component={LoginPage} />
          <Route exact path="/users" component={UsersList} />
          <Route   path='/' component={RegisterPage} />
          <Redirect  from="*" to="/" />
          </Switch>
  
      </div>
      
    </div>
    </Router>
  );
}

export default App;
