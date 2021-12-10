import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Liste from './pages/Liste';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/liste" exact component={Liste} />
        <Route path="/register" exact component={Register} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
