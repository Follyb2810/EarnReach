import React,{Component} from "react"
import Header from "../Components/Header";

class Ads extends Component{
    render(){
        return(
            <div className="ads">
                <Header/>
                <h1>Sell Anything Faster</h1>
                <p>You can now advertise and place your product/service in the front of thousand that use our website and mobile app everyday.Benefits you to get for placing your advert</p>
                <div  className="adsContent">
                    <div className="adsHandle">
                        <i className="fa-solid fa-eye"></i>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Quisquam dolores commodi vitae voluptatibus perferendis.
                          Cum iure nisi id natus unde illo voluptatum totam eos quasi, 
                          voluptates delectus dolorem dicta praesentium!
                        </p>
                     </div>
                    <div className="adsHandle">
                        <i className="fa-brands fa-facebook"></i>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Quisquam dolores commodi vitae voluptatibus perferendis.
                          Cum iure nisi id natus unde illo voluptatum totam eos quasi, 
                          voluptates delectus dolorem dicta praesentium!
                        </p>
                     </div>
                    <div className="adsHandle">
                         <i className="fa-regular fa-handshake"></i>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Quisquam dolores commodi vitae voluptatibus perferendis.
                          Cum iure nisi id natus unde illo voluptatum totam eos quasi, 
                          voluptates delectus dolorem dicta praesentium!
                        </p>
                     </div>
                    <div className="adsHandle">
                         <i className="fa-regular fa-thumbs-up"></i>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Quisquam dolores commodi vitae voluptatibus perferendis.
                          Cum iure nisi id natus unde illo voluptatum totam eos quasi, 
                          voluptates delectus dolorem dicta praesentium!
                        </p>
                     </div>
                </div>
            </div>
        )
    }
}
export default Ads;