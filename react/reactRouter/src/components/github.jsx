import { useCallback, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData([]);

    return (
        <div className="border-spacing-3 bg-slate-500 text-white">
            <img src={data.avatar_url}/>
            <div>
                Github followers: {data.followers}
            </div>
        </div>
    );
}

export default Github;
 
export const getData = async ()=> {
    const response = await fetch("https://api.github.com/users/calculuslmvt");
    return response.json();
};

