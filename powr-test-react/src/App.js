import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BoxContainer from "./components/BoxContainer";
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={BoxContainer}/>
            <Route exact path="/:id" component={BoxContainer}/>
          </Switch>
        </div>
      </BrowserRouter>


  );
}

export default App;
