import React from "react";
import { Component } from "react";
import FrontPage from "../Components/FrontPage";
import Header from "../Components/Header";


class Landing extends Component{
    render(){
        return(
            <div className="App">
       <Header/>
       <FrontPage/>
     </div>
        )
    }
}
// function Landing() {
//   return (
//     <div className="App">
//       <Header/>
//       <FrontPage/>
//     </div>
//   );
// }

export default Landing;