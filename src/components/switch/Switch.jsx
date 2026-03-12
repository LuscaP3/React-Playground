import { useEffect, useState } from 'react';
import styles from './switch.module.css'

function Switch({color = "#6eff83", onSwitch, size = 1, status = false}) {
    const [button, setButton] =  useState(status);

    useEffect(() => {
        if(onSwitch){
            onSwitch(status);
        }
        setButton(status)
    }, []);

    function handleClick(){
        const newButton = !button;

        setButton(newButton);

        if(onSwitch){
            onSwitch(newButton);
        }

    }

  return (
    <div 
        className = {styles.switch} 
        onClick={handleClick} 
            style = {{
                "backgroundColor": (button ? color : "#e9e9e9"),
                "width": size * 40,
                "height": size * 20,
                "borderRadius": size * 14
                }}> 

        <div 
            className = {[styles.core, styles[button ? "core-on" : ""]].join(" ")}
            style = {{
                "width": size * 16,
                "height": size * 16
            }}/> 
    </div>
  )
}

export default Switch;