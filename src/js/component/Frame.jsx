import React, { useState } from "react";
import Light from "./LightColor";
//include images into your bundle


//create your first component
const Frame = () => {
 
	return (
            <div className="container">
                <div className="row">
                    <div className="col-1 mx-auto bg-dark border border-bottom-0 border-3 border-secondary  py-5">
                    <br/>
                    <br/>
                    <br/>
                </div>   
                </div>
                <div className="row">
                    <div className="col-2  mx-auto px-2 bg-dark border border-3 rounded-3 border-secondary">      
                        <Light color={'red'} />
                        <Light color={'yellow'}  />
                        <Light color={'green'} />
                    </div>
                </div>
            </div>
		
	);
};

export default Frame;
