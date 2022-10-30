// import React,{Component} from "react"
// import {useState} from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fabars} from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars,faList,faCartPlus,faSquarePollVertical} from '@fortawesome/free-solid-svg-icons'

import SidebarItem from "./SidebarItem";

// class SideBar extends Component{
    // constructor
    // state={}
     

    // render(){
        const SideBar=()=>{
            // const [openForum,setOpenForum] = useState(false)
        return(
             <div>
                         <div className="sidebar-logotop">
                            <div>
                            <img src={require("../Components/images/Vector.svg").default} alt="the logo" />
                            <img src={require("../Components/images/Earn Reach.svg").default} alt="the logo" />
                            </div>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                <div  className="sidebarC">
                <SidebarItem/>
                </div>
             </div>
            // <div className="sideBar">
            //     <div className="sideBarLogo">
                //     <div>
                //         <img src={require("../Components/images/Vector.svg").default} alt="the logo" />
                //         <img src={require("../Components/images/Earn Reach.svg").default} alt="the logo" />
                
                //     </div>
                //     <i class="fa-solid fa-bars"></i>
                // </div>
            //     <div className="sideBarComponent">
            //            <div className="overView openOverview">
            //                 <div>
            //                     <i class="fa-solid fa-square-poll-vertical"></i>
            //                     <span>Overview </span>
            //                 </div>
            //            </div>
            //            <div className="forum" >
            //                 <div>
            //                     <i class="fa-solid fa-square-poll-vertical"></i>
            //                     <span>Forum</span>
                             
            //                 </div>
            //                 <div className="forumContent openForum">
            //                         <div>Politcs</div>
            //                         <div>Romance</div>
            //                         <div>Education</div>
            //                         <div>Jobs</div>
            //                         <div>Investment</div>
            //                         <div>Bussiness</div>
            //                         <div>Food</div>
            //                         <div>Properties</div>
            //                         <div>Fitness & Health</div>
            //                         <div>Security</div>
            //                 </div>
            //            </div>
            //            <div className="marketPlace">
            //                 <div>
            //                 <i class="fa-solid fa-square-poll-vertical"></i>
            //                     <span>MarketPlace</span>
                            
            //                 </div>
            //                 <div className="marketPlaceContent openMarket">
                                // <div>Categories</div>
                                // <div>Electronics</div>
                                // <div>Food</div>
                                // <div>Health</div>
                                // <div>Bussiness</div>
                                // <div>Properties</div>
                                // <div>Fitness & Health</div>
                                // <div>Jobs</div>
                                // <div>Other Categories</div>
            //                 </div>
            //            </div>
            //     </div>
            // </div>
        
            )
    }

export default SideBar;