import { useState } from "react"
export default function SidebarItem(){

    const [openOverview,setOpenOverview]=useState(false) 
    const [openMarket,setOpenMarket]=useState(false) 
    return(
        <div>
        <div className="forum">
             <div className="forum-title">
                <span>
                <i className="fa-solid fa-square-poll-vertical"></i>
                {/* <i className="fa-solid fa-square-poll-verticals"></i> */}
                   Forum
                </span>
                <i className="fa-solid fa-chevron-down toggle-btn" ></i>
             </div>
             <div>
                                     
             </div>
        </div>
        <div className={openOverview?"overView open":"overView"}>
             <div className="overView-title">
                <span>
                <i className="fa-solid fa-users-viewfinder"></i>
                   Overview
                </span>
                <i className="fa-solid fa-chevron-down" onClick={()=>setOpenOverview(!openOverview)}></i>
             </div>
             <div className="overContent">
                                <ul>
                                    <li>Politcs</li>
                                    <li>Romance</li>
                                    <li>Education</li>
                                    <li>Jobs</li>
                                    <li>Investment</li>
                                    <li>Bussiness</li>
                                    <li>Food</li>
                                    <li>Properties</li>
                                    <li>Fitness & Health</li>
                                    <li>Security</li>
                                </ul>
                                    
             </div>
        </div>
        <div className={openMarket?"market open":"market"}>
             <div className="market-title">
                <span>
                <i className="fa-solid fa-shop"></i>
                   MarketPlace
                </span>
                <i className="fa-solid fa-chevron-down toggle-btn " onClick={()=>setOpenMarket(!openMarket)}></i>
             </div>
             <div className="marketContent">
                                <ol>
                                    <li>Politcs</li>
                                    <li>Romance</li>
                                    <li>Education</li>
                                    <li>Jobs</li>
                                    <li>Investment</li>
                                    <li>Bussiness</li>
                                    <li>Food</li>
                                    <li>Properties</li>
                                    <li>Fitness & Health</li>
                                    <li>Security</li>
                                </ol>
             </div>
        </div>
        </div>
    ) 
}