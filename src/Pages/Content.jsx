import Card from "../Components/Card"
import SideBar from "../Components/SideBar"

 const Content =()=>{
    return(
        <div className="main">
            <div className="sidebar">
            <SideBar/> 
            </div>
            <div className="container">
                <Card/>
            </div>
            
        </div>
    )
 }
 export default Content