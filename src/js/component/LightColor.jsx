
import React, { useState } from "react";

//include images into your bundle


//create your first component
const Light = (props) => {
        const [isSelected, setIsSelected] = useState('');
        const LightOn = (cor) => {
                setIsSelected(cor);
                
    
        }
        console.log(props)
        return (
                <div className={`col light border border-3 border-dark ${isSelected == props.color ? 'selected' : ''}`}  onClick={ () => LightOn(props.color)}  style={{backgroundColor: props.color}} >
                      
                        

                </div>
        );
};

export default Light;