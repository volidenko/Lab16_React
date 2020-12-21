import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavMenu from './pages/NavMenu';

function App() {
  return (
    <>
   <NavMenu></NavMenu>
    <Switch>
      <Route exact path="/" component="Main"></Route>
      <Route path="/posts" component="PostList"></Route>

    </Switch>
    </>
  );
}

export default App;
