import Side from "./Components/SideLogo"
import Landing from './Pages/Landing';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'



function App() {
  return (
      //  <div>
      //   <Landing/>
      //   <Side/>
      //  </div>
      <div className="App">
     <Router>
      
    <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path="/side" component={Side}/>
    </Switch>`
    </Router>
    </div>
  );
}

export default App;
