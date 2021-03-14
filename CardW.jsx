import React from "react";

import web from "../src/images/img2.jpg";
import  {NavLink} from "react-router-dom";

const CardW =(props)=> {
    return (
        <>
        
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card" >
                                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                                            <p className="card-text">Approach Us For Any Kind Of Development.</p>
                                            <NavLink to=""  className="btn btn-primary">Go To Official Website</NavLink>
                                        </div>
                                </div>
                            </div>
                        
            
          
        </>
       
    )
}

export default CardW;
