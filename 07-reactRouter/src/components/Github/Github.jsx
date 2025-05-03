import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data=useLoaderData()
//     const [data,setData]=useState([])
//   useEffect(() => {
//     fetch("https://api.github.com/users/Rudra805-cloud")
//     .then((response) => response.json()
//     .then(data=>{
//         console.log(data);
//         setData(data)
        
//     })
//     );
//   }, []);

  return (
    <>
    <div className="max-w-md mx-auto text-center m-4 bg-gray-700 text-white p-2 rounded">
      Github Followers:{data.followers}
     
    </div>
    <div> <img 
    src={data.avatar_url} 
    alt="github image" 
    className="w-50 h-50 -mt-4 rounded-lg border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
/>
    </div>
     </>
  );
}

export default Github;

//why we use this type method becase when our cursor move on github than its fetch api and lode in chache and latency and lag issue is resolved and code become more optimise
export const githubInfoLoder=async()=>{
    const response=await fetch('https://api.github.com/users/Rudra805-cloud')
    return response.json()
}







