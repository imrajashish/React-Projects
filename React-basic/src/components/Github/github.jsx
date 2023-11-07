import React, { useEffect, useState } from "react";

export default function Github(){
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/imrajashish').then(resp => resp.json()).then(data => setdata(data))
            
    },[])
    return(
        <div className=" text-center m-4 bg-gray-600 text-white text-center text-3xl"> Github followers: {data.followers}
        <img src={data.avatar_url} alt="Profile Picture" width={300}  /> <b className=" align-text-top">User Id: {data.login}</b>
        </div>
    )
}


// export const githubInfoLoder = async () =>{
//     const resp = await fetch('https://api.github.com/users/imrajashish')
//     return resp.json()
// }