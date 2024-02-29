import { useState } from "react"
import "./color.css"


export const Color = () => {
    const [color , setColor] = useState("#000000");
    const [colorType , setColorType] = useState("Hex");
    
    function createHex(){
        const letterHex = "0123456789ABCDEF";
       let newHex = "#";

        for (let index = 0; index < 6; index++) {
           newHex += letterHex[Math.floor(Math.random()* 16)]
           
            
        }
        setColor(newHex)
        setColorType("Hex")
    };
    function createRgb(){
        const numberRgbRed = (Math.floor(Math.random() * 256));
        const numberRgbGreen = (Math.floor(Math.random() * 256));
        const numberRgbBlue = (Math.floor(Math.random() * 256));
        const rgb = `rgb(${numberRgbRed} , ${numberRgbGreen} , ${numberRgbBlue})`;

        setColor(rgb)
        setColorType("Rgb")
        
    }
    function randomColor(){
        const randomNum = (Math.floor(Math.random() * 2));
        if(randomNum === 0){
            createHex()
        }else{
            createRgb()
        }
    }

    return (
    <>
    
    <div className="btn-container" style={{background: color}}  >
        <div className="btns">
          <button onClick={createHex}>Create HEX color</button>
          <button onClick={createRgb}>Create RGB color</button>
         <button onClick={randomColor}>Generate random color</button>

        </div>
      
        <div className="text">
            <h2>{`${colorType} Color`}</h2>
            <h1>{color}</h1>

        </div>
     
        
    </div>
   
    </>
  );
};
