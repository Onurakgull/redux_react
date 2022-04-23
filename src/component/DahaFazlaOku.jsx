import React, { useState } from 'react'

const DahaFazlaOku = ({text, max}) => {
    const [hidden, setHidden] = useState(true);

    if(text.length < max){
        return <span>{text}</span>
    }

  return (
    <div>
        {hidden ? `${text.substr(0,max).trim()}` : text}
        {hidden ? (
            <a onClick={() => setHidden(false)}>Daha fazla..</a> 
        ) : (
            <a onClick={() => setHidden(true)}>Daha az..</a>
        )}
    </div>
  )
}

export default DahaFazlaOku;