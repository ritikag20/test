//To redirect the user as per the structure of the Web URL
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import CallPage from "./components/CallPage/CallPage";
import NoMatch from "./components/NoMatch/NoMatch";

//If the URL is of the form "www.clone-test-1.herokuapp.com/" it will display the HomePage
//If the URL is of the form "www.clone-test-1.herokuapp.com/<random string>" it will display the CallPage
//If theURL is of the form "www.clone-test-1.herokuapp.com/<random string 1>/<random string 2> it will display the NoMatch page

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <CallPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;