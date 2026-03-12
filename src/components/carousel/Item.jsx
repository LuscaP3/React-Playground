import { useRef } from 'react';
import styles from './carousel.module.css';


function Item({image, description, id, gap, width, onClick}) {
  const desc = useRef(null);
  
  function pointerInHandler(){
    desc.current.style.opacity = 1;
  }

  function pointerOutHandler(){
    desc.current.style.opacity = 0;
  }

  function clickHandler(){
    if(onClick){
      onClick(id);
    }
  }

  return (
    <div onClick = {clickHandler} onPointerEnter = {pointerInHandler} onPointerLeave = {pointerOutHandler} className = {styles.item} style = {{"margin": gap, "width": width}}>
        <img className = {styles.image} src= {image}/>
        <p ref = {desc} className = {styles.description}> {description} </p>
    </div>
  )
}

export default Item;