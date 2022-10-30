import Side from "./Components/SideLogo"
import Landing from './Pages/Landing';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import SideBar from "./Components/SideBar";
import Content from "./Pages/Content";
import Ads from "./Pages/Ads"
import PostAds from "./Pages/PostAds";
// import Mailroom from "./example";



function App() {
  return (
      //  <div>
      // {/* //   <Landing/> */}
      // {/* //   <Side/> */}
      // {/* <SideBar/> */}
      // {/* <Mailroom/> */}
      // {/* </div> */}
      <div className="App">
     <Router>
      
    <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path="/side" component={Side}/>
        <Route path="/content" component={Content}/>
        <Route path="/ads" component={Ads}/>
        <Route path="/postads" component={PostAds}/>
        
    </Switch>`
    </Router>
    </div>
  );
}

export default App;
