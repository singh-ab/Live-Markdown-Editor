import React from 'react'
import {ReactComponent as MoonIcon} from './moon.svg';
import {ReactComponent as SunIcon} from './sun.svg';

const ThemeSwitch = () => {
    const setDarkMode=() =>{
        document.querySelector("body").setAttribute("data-theme","dark");
    };

    const setLightMode=() =>{
        document.querySelector("body").setAttribute("data-theme","light");
    };

    // console.log(setLightMode())
    const toggleTheme=(e) =>{
        if(document.querySelector("body").getAttribute("data-theme")==="light"){
            setDarkMode();
        }else{
            setLightMode();
        }
    }
  return (
    
    <>
    {/* <div>
      <input type="checkbox" id="switch" onClick={toggleTheme} style={display: hidden;}/>
      <label className="switch_label" htmlFor="switch">
      </label>
    </div> */}
    <button id="switch" type='checkbox' onClick={toggleTheme}>
        <SunIcon/>
        <MoonIcon/>
    </button>
    </>
  )
}

export default ThemeSwitch