import React,{Component} from "react"
// import { fontawesomeIcon} from "@fortawsome/react-fontawesome"
// import { faCoffee} from "@fortawsome/free-solid-svg-icons"
// import {faInstagram} from "react-icon/fa"
// import {faFacebook} from "react-icon"
// import {} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faGoogle} from '@fortawesome/free-brands-svg-icons'

class Side extends Component{
    render(){
        return(
                    <div className="sideLogo">
                        <div className="sideLeft">
                            <img src={require("../Components/images/Vector.svg").default} alt="the logo" />
                            <img src={require("../Components/images/Earn Reach.svg").default} alt="the logo" />
                        </div>
                        <img src={require("../Components/images/manWithPhone.svg").default} alt="man" className="sideImage" />
                        <div className="sideRight">
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">German</option>
                            </select>
                            <div className="formSection">
                                <h3>Create Account</h3>                  
                                <div id="signSocial">
                                    <div>sign in with Facebook <FontAwesomeIcon icon={faFacebook} /></div>
                                    <div>sign in with Google <FontAwesomeIcon icon={faGoogle} /></div>
                                </div>
                                <div id="or">OR</div>
                                <form action="" className="signIn">
                                        <div >
                                            <input type="text" />
                                            <label ><span>Full Name</span></label>
                                        </div>
                                        <div>
                                            <input type="text" />
                                            <label ><span>Email</span></label>
                                        </div>
                                        <div>
                                            <input type="text" />
                                            <label ><span>Password</span></label>
                                        </div>
                                    <button>Create Account</button>
                                    <div>You already Have an account?<span>Sign In</span></div>
                                </form>                       
                                    
                            </div>
                        </div>
            </div>
        )
    }
}
export default Side;