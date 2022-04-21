import React, { useState, useEffect } from "react";

const HookSayac=()=>{
    const [ sayac, setSayac ] = useState(0)

    useEffect(()=>{
        document.title=`${sayac}`
    })
return(
    <div>
        <br></br>
        <button onClick={()=>setSayac(sayac+1)}>{sayac}</button>
    </div>
);
}

export default HookSayac