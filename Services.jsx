
import React from "react";
import  {BrowserRouter} from "react-router-dom";
// import web from "../src/images/img2.jpg";
import CardW from "./CardW";
import SDataW from "../src/SDataW";

const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5 ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                SDataW.map((val,ind)=>{
                                    return <CardW 
                                    imgsrc={val.imgsrc} title={val.title} />   //props
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )
};
export default Services;