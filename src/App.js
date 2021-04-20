import './App.css';
import Navigate  from './nav';
import Register from './register';
import Login from './login';
import Head from './head';
import Result from './result'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navigate></Navigate>
      <div className="container">
        <Switch>
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact/>
        <Route path="/head/:id" component={Head} exact/>
        <Route path="/result/:id" component={Result} exact/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
