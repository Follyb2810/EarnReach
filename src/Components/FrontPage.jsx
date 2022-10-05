import React,{Component} from "react"


class FrontPage extends Component{
    render(){
        return(
             <main>
                <div>

                <h1>Welcome</h1>
                <p>
                Here we give you social media task to do and you earn by carrying out those task.its a place where you can buy and sell goods and products 
                </p>
                <buton id="getStarted">Get Started</buton>
                </div>
                <div>

                <img src={require("../Components/images/phone.svg").default} alt="phone" />
                </div>
            </main>
        )
    }
}
export default FrontPage;