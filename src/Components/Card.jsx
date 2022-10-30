import React, {Component} from "react";

class Card extends Component{
    // constructor(){
    //     super()
    //     this.age =this.age.bind(this)
    // }
    // age=()=>{
    //   for(let i=1;i<10;i++)
    //  return <li>{i}</li>
    // // console.log()
    // }
    render(){
        return(
            <div className="card">
                <div className="cardBorder">
                        {/* <img src={require("../Components/images/a.jpg")} alt="local" /> */}
                        <h3>follyb</h3>
                        <div className="location">folly</div>
                        
                    <div className="cardImage">
                        {/* <img src={require("../Components/images/a.jpg")} alt="local" /> */}
                    </div>

                </div>
            </div>
        )
    }
}


export default Card;