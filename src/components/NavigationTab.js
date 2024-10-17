import React from "react";
import { content } from "../utils/constats";
import { useState } from "react";

export const NavigationTab = () => {
  const data =content 
  const [activeContentIndex, setActiveContentIndex] = useState(0);
   
  return (
    <>
      <header>
        <img src="react-logo-xs.png" alt="react" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
        <button className={activeContentIndex===0?"active":""} onClick={()=>setActiveContentIndex(0)}> Why React?</button>
        <button className={activeContentIndex===1?"active":""} onClick={()=>setActiveContentIndex(1)}> Core Features</button>
        <button className={activeContentIndex===2?"active":""} onClick={()=>setActiveContentIndex(2)}>Related Resources</button>
        </menu>
        <div id="tab-content">
          <ul>
            {data[activeContentIndex].map((line)=>{
                return(
                  <li>{line}</li>
                )
            })}
          </ul>

        </div>
        
      </div>
      
    </>
  );
};

export default NavigationTab;
