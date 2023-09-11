import React, { useState } from "react";
import Light from "./LightColor";
const Frame = () => {
    const [activeColor, setActiveColor] = useState('red');
    const handleClick = (color) => {
        setActiveColor(color);
    };
    const isLightSelected = (color) => {
        return activeColor === color;
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-1 mx-auto bg-dark border border-bottom-0 border-3 border-secondary  py-5">
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            <div className="row">
                <div className="col-2  mx-auto px-2 bg-dark border border-3 rounded-3 border-secondary">
                    <div
                        className={`col light border border-3 border-dark ${isLightSelected("red") ? "selected" : ""
                            }`}
                        onClick={() => handleClick("red")}
                        style={{ backgroundColor: "red" }}
                    ></div>
                    <div
                        className={`col light border border-3 border-dark ${isLightSelected("yellow") ? "selected" : ""
                            }`}
                        onClick={() => handleClick("yellow")}
                        style={{ backgroundColor: "yellow" }}
                    ></div>
                    <div
                        className={`col light border border-3 border-dark ${isLightSelected("green") ? "selected" : ""
                            }`}
                        onClick={() => handleClick("green")}
                        style={{ backgroundColor: "green" }}
                    ></div>
                </div>
            </div>
        </div>
    );
};
export default Frame;
