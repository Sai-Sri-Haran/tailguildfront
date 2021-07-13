import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./views/Home/Home";
import Signin from "./views/Sigin/Signin";
import Signup from "./views/Siginup/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Story from "./components/Story/Story";
import Feed from "./views/Feed/Feed";
import Profile from "./views/Profile/Profile";


function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <div className='mt-15'>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Signin} />
          <Route path="/register" exact component={Signup} />
          <Route path="/story" exact component={Story} />
          <Route path="/feed" exact component={Feed} />
          <Route path="/show/:user" exact component={Profile} />
          <Route path="*" exact component={()=><h1>Page Not fount</h1>} />
        </div>
      </Switch>
    </Router>

  );
}

export default App;
