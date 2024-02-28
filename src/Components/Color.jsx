import { useState } from "react"
import "./color.css"


export const Color = () => {
    const [colorHex , setColorHex] = useState("#000000");
    const [colorRgb , setColorRgb] = useState("255");
    
    function createHex(){
        const letterHex = "0123456789ABCDEF";
       let newHex = "#";

        for (let index = 0; index < 6; index++) {
           newHex += letterHex[Math.floor(Math.random()* 16)]
           console.log(newHex)
            
        }
        setColorHex(newHex)
    };

    return (
    <>
    
    <div className="btn-container" style={{background: colorHex}}>
        <div className="btns">
          <button onClick={createHex}>Create HEX color</button>
          <button>Create RGB color</button>
         <button>Generate random color</button>

        </div>
      
        <div className="text">
            <h2>Hex Color</h2>
            <h1>{colorHex}</h1>

        </div>
     
        
    </div>
   
    </>
  );
};
