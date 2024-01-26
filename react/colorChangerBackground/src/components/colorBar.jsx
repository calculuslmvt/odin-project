import ChangeColor from "./changeColor";
import { bgColor } from "./changeColor";
import { useState } from "react";


// +++++++ important, this is example of component state uplifting study carefully ++++++++

function ColorBar() {

    // "blue", "black", "#ffc8c8", "#58afbf", "#f0e6ab","#48bdb6", "#d3bae1"
    let colorOptions = ["blue", "black", "#ffc8c8", "#58afbf", "#f0e6ab","#48bdb6", "#d3bae1", "black", "#ffc8c8", "#58afbf", "#f0e6ab","#48bdb6", "#d3bae1"]; 
    let colorCollection = []; 
    let [currColor, setCurrColor] = useState("blue"); 

    //currColor = "black"; 
    for(let color of  colorOptions) {
        colorCollection.push(<ChangeColor bgColor={color} setCurr={(value) => setCurrColor(value)}/>)
    }
    console.log(colorCollection);

    console.log(bgColor); 
    return (

        <div className=" h-full w-full absolute inset-0" style={{backgroundColor : currColor}}>  
                <div className="absolute inset-x-0 bottom-2 ">
                <div className="inline-block rounded-md bg-gray-100 p-2 overflow-x-auto w-96">
                    <div className="flex items-center">
                        <div className="grid grid-flow-col gap-3">
                            {colorCollection}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default ColorBar;
