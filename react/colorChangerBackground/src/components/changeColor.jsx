import React, { useState } from "react";
let currColor = "black"; 
function ChangeColor({bgColor = "black", setCurr}) {
    return (
        <button
            type="button"
            style={{ backgroundColor: bgColor }}
            onClick={() => setCurr(bgColor)}
            className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            {bgColor}
        </button>
    )
}
export default ChangeColor; 
export let bgColor = currColor; 