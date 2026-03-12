import { useRef, useState } from 'react';
import styles from './card.module.css'

function Card({src}){
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const [mouseAngle, setMouseAngle] = useState(0);
    const [brightness, setBrightness] = useState(1);

    const[rotateX, setRotateX] = useState(0);
    const[rotateY, setRotateY] = useState(0);

    const containerRef = useRef(null);

    function handleMouseMove(e){

        // Mouse Position
        const rect = containerRef.current.getBoundingClientRect();

        const mx = e.clientX - rect.left;   // Top Left based position
        const my = e.clientY - rect.top;

        setMouseX((-rect.width/2) + mx);
        setMouseY((-rect.height/2) + my);

        // Mouse Angle
        const centerMx = mx - (rect.width/2);         //Center based position
        const centerMy = -(my - (rect.height/2));

        let angle = (Math.atan2(centerMy, centerMx) * (180/Math.PI));
        if (angle < 0) angle += 360;
        setMouseAngle(-angle);


        // Outline
        const distance = Math.sqrt(centerMx**2 + centerMy**2);
        if(distance < rect.width/4 || distance < rect.height/4){
            setBrightness(0);
        }
        else{
            setBrightness(1);
        }

        // Rotation
        const aspect = (containerRef.current.offsetWidth/containerRef.current.offsetHeight)/30;
        const xRot = distance * Math.sin(Math.atan2(centerMy, centerMx)) * aspect
        const yRot = distance * Math.cos(Math.atan2(centerMy, centerMx)) * aspect;

        setRotateX(xRot);
        setRotateY(yRot);
    }

    return(
        <div ref = {containerRef} onMouseMove = {handleMouseMove} className = {styles.container} 
            style = 
                {{
                    '--mx': `${mouseX}px`, 
                    '--my': `${mouseY}px`, 
                    '--bp': `${mouseAngle}deg`,
                    '--brightness': `${brightness}`,
                    '--rotateX': `${rotateX}deg`,
                    '--rotateY': `${rotateY}deg`
                }}>
            <img className = {styles.image} src = {src}></img>
        </div>
    );
}

export default Card;