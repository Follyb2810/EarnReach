import React,{Component} from "react";
import Header from "../Components/Header";
import {useState} from "react"


// class PostAds extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         About:true,
    //         // close:""
    //         // cAbout:false
    //     }
    // }
    const PostAds =()=>{
        const [openAbout,setOppenABout]=useState(true)
        const [openDetails,setOpenDetails]=useState(true)
    // const closeAbout = () =>{
    //     console.log("me")
    //     // this.setState({About:false})
    //     // console.log("me")
    // }
    // render(){
        return(
            <div>
               <Header/>
                <div className="postAds">
                    <h1>Post Ads</h1>
                    <div className="addPace">
                        <div id="adsAbout" onClick={()=>setOppenABout(!openAbout)}>About Ads</div>
                        <div id="adsDetails" onClick={()=>setOpenDetails(!openDetails)}>Ads Details</div>
                    </div>
                    <div>
                        
                    </div>
                    <div className={openAbout?"adsAboutSelect active ":"adsAboutSelect"}>
                        {/* <div className={openAbout?"adsSelect active":"adsSelect"}> */}
                        <div className="adsSelect">
                            <select name="" id="">
                                <option value="">Categories</option>
                                <option value="">a</option>
                                <option value="">a</option>
                                <option value="">a</option>
                                <option value="">a</option>
                            </select>
                            <select name="" id="">
                                <option value="">Ads Location</option>
                                <option value="">a</option>
                                <option value="">a</option>
                                <option value="">a</option>
                                <option value="">a</option>
                            </select>
                        </div>
                        <div className="adsImage">
                            <h3>Add Photo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.mus </p>
                            <i className="fa-solid fa-circle-plus"></i>
                            <input type="file" name="" id="" />
                            <p>each picture should not exceed 5mb</p>
                        </div>
                            <button>Next</button>
                    </div>
                    <div className={openDetails?"adsAboutSelect active ":"adsDetailsSelect"}>
                        <div  className="adsDetailsInput">
                            <div>
                                <input type="text" name="" id="" placeholder="Title" />
                                <select name="" id="">
                                    <option value="Male">Gender</option>
                                    <option value="Male">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                                <select name="" id="">
                                   
                                    <option value="Male">Age</option>
                                    <option value="Male">1</option>
                                    <option value="Male">2</option>
                                </select>
                                {/* <input type="text" name="" id="" placeholder="Gender" /> */}
                                {/* <input type="text" name="" id="" placeholder="Age"/> */}
                            </div>
                            <div>
                            <select name="" id="">
                                    <option value="Male">Types</option>
                                    <option value="Male">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                            {/* <input type="text" name="" id="" placeholder="type"/> */}
                            </div>
                        </div>
                        <textarea name="" id="" cols="60" rows="10" placeholder="Description"></textarea>
                        <input type="number" name="" id="" className="adsAmount" />
                        <input type="number" name="" id="" className="adsBulk"/><br/>
                        <input type="checkbox" name="" value="" id="negotiate" />
                        <label>Negotiation</label> 
                        
                    </div>

                </div>
            </div>
        )
    }
// }
export default PostAds