import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './slider.module.css'

function Slider({onChange, color = "#e9e9e9", maxValue = 100, initialValue = 10, size = 1}) {
    const [value, setValue] =  useState(initialValue);
    const [pressed, setPressed] =  useState(false);

    const containerRef = useRef(null);
    const railLeftRef = useRef(null);
    const railRightRef = useRef(null);
    const buttonRef = useRef(null);

    const handleMouseMove = useCallback( (e) => {
        if(pressed) {
            let newLeftRailWidth = railLeftRef.current.offsetWidth + e.movementX;
            let newRightRailWidth = railRightRef.current.offsetWidth - e.movementX;

            const containerWidth = railLeftRef.current.offsetWidth + railRightRef.current.offsetWidth;

            newLeftRailWidth = newLeftRailWidth < 0 ? 0 : newLeftRailWidth;
            newLeftRailWidth = newLeftRailWidth > containerWidth ? containerWidth : newLeftRailWidth;

            newRightRailWidth = newRightRailWidth < 0 ? 0 : newRightRailWidth;
            newRightRailWidth = newRightRailWidth > containerWidth ? containerWidth : newRightRailWidth;

            railLeftRef.current.style.width = (newLeftRailWidth / containerWidth * 100) + "%";
            railRightRef.current.style.width = (newRightRailWidth / containerWidth * 100) + "%";

            setValue(maxValue * (newLeftRailWidth)/containerWidth);


            if(onChange){
                onChange(value);
            }
        }
    });

    const handleMouseUp = useCallback( () => {
        setPressed(false)
        document.body.style.userSelect = "";
    });

    useEffect( () => {
        if(onChange){
                onChange(value);
        }
    });

    useEffect( () => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);


        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
    }, [handleMouseMove, handleMouseUp]);


  return (
    <div className = {styles.container} ref = {containerRef}>
        <div className =  {[styles.rail, styles["rail-left"]].join(" ")} ref = {railLeftRef}  style = {{"backgroundColor": color, "width": ((100*initialValue)/maxValue + "%"), "height": 10 * size}}/>
        <div className = {styles.button} ref = {buttonRef}    style = {{"height": 25 * size + "px", "width": 25 * size + "px"}} onMouseDown = {() => {setPressed(true); document.body.style.userSelect = "none";}}/>
        <div className = {[styles.rail, styles["rail-right"]].join(" ")} ref = {railRightRef} style = {{"width": (100*(maxValue-initialValue))/maxValue + "%", "height": 10 * size}}/>
    </div>
  )
}

export default Slider;