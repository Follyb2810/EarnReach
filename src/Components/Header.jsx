import React,{Component} from "react"
import { Link } from "react-router-dom";
// import logo from "./Components/images/Earn Reach.png"
// import A from "../Components/images/a.jpg"


class Header extends Component{
    render(){
        return(
            <header>
                <div className="headerMenu">
                    <div>

                        <img src={require("../Components/images/Vector.svg").default} alt="the logo" />
                        <img src={require("../Components/images/Earn Reach.svg").default} alt="the logo" />
              
                    </div>
                        <ol>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/postads'>News</Link></li>
                            <li><Link to='/side'>MarketPlace</Link></li>
                            <li><Link to='/content'>About</Link></li>
                        </ol>
              </div>

              <div><Link to='/'>Sign In</Link></div>
            
            
            </header>
        )
    }
}

export default Header;