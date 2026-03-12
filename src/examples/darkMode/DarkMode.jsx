import { useState } from 'react';
import styles from './darkMode.module.css'
import Switch from '../../components/switch/Switch.jsx'

function DarkMode() {
    const [theme, setTheme] =  useState("light");

    const colors = {"light": "#f5f5f5", "dark": "#525252"};

    function switchTheme(){
        const newTheme = theme == "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    function getTextColor(){
        if(theme == "light") {return "dark"};
        return "light";
    }

    return (
        <div className = {styles.container} style={{"backgroundColor": colors[theme]}}>
            <div className = {styles.titleContainer} style={{"borderColor": colors[getTextColor()]}}> <p className = {styles.titleItens} style={{"color": colors[getTextColor()]}}> Dark Mode </p> <Switch className = {styles.titleItens} onSwitch = {switchTheme} color = "#d2d1ed" size = {0.85} status = {true}/> </div>
            <div className = {styles.textContainer}> <p style={{"color": colors[getTextColor()]}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p> </div>
        </div>
    )
}

export default DarkMode;