import React,{Component} from "react"
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
                            <li>Home</li>
                            <li>News</li>
                            <li>MarketPlace</li>
                            <li>About</li>
                        </ol>
              </div>

              <div>Sign In</div>
            
            
            </header>
        )
    }
}

export default Header;