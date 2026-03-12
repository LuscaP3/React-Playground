import { useState } from 'react';
import Slider from '../../components/slider/Slider';
import styles from './colorSelector.module.css'

function ColorSelector() {
    const [color, setColor] =  useState({"red": 32, "blue": 89, "green":148});
    
    function rgbToHex(r, g, b) {
      return (
          "#" +
          [r, g, b]
            .map(value => value.toString(16).padStart(2, "0"))
            .join("")
        );
    }


  return (
    <div className = {styles.selectorContainer}>
      <div className = {styles.slidersContainer}>
        <Slider color = "#F54242" onChange = {(value) => setColor({...color, red: Math.floor(value)})}   initialValue={32} maxValue={255} />
        <Slider color = "#42F554" onChange = {(value) => setColor({...color, green: Math.floor(value)})} initialValue={89} maxValue={255} />
        <Slider color = "#4287f5" onChange = {(value) => setColor({...color, blue: Math.floor(value)})}  initialValue={148} maxValue={255} />
      </div>

      <div className = {styles.colorIndicator}>
        <div style = {{"width": "150px", "height": "150px", "borderRadius": "50%", "backgroundColor": `rgb(${color.red}, ${color.green}, ${color.blue}`}}> </div>
        <p style = {{"color" : "#ffffff", "fontSize": 25}}>{rgbToHex(color.red, color.green, color.blue)}</p>
      </div>
    </div>
  )
}

export default ColorSelector