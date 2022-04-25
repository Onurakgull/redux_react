import React, { useContext, useState } from "react";
import Index from "./component";
import DahaFazlaOku from "./component/DahaFazlaOku";
import Data from "./component/Data";
import HookSayac from "./component/HookSayac";


export const lightTheme={
  type: "light",
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "lineer-gradient(#39598A,#79D7ED)"
};
export const darkTheme={
  type: "dark",
  body: "#363537",
  text: "#fafafa",
  toggleBorder: "#6bb096",
  gradient: "lineer-gradient(#091236,#1E215D)"
}
const ThemeContext= React.createContext(null); 

function App() {
  
  const [theme, setTheme]=useState(darkTheme)

  const handleThemeChange=()=>{
    if(theme.type==="dark"){
      setTheme(lightTheme);
    }else{
      setTheme(darkTheme);
    }
  }
  return (
    <>
         <button onClick={()=>handleThemeChange()}>{theme.type==="dark" ? 'Light Theme' : 'Dark Theme'}</button>
         <ThemeContext.Provider value={theme}>
          <Kare/>
        </ThemeContext.Provider>
            <Index/>
            <HookSayac/>
            <Data/>
            <DahaFazlaOku 
            text={"Merhaba bugün yapacakların hakkında bana bahsetmeni istiyorum."}
            max={15}/>
     
    </>
  );
}
const Kare = () =>{
    const theme = useContext(ThemeContext)
    return(
      <div style={ {color: `${theme.gradient}`}}>
        Temam: {theme.type}
        <h2>Tema light</h2>
      </div>
    );
};

export default App;
