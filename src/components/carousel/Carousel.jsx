import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './carousel.module.css';


function Carousel({children, gap = 10}) {
    const [rightButton, setRightButton] =  useState(true);
    const [leftButton, setLeftButton] =  useState(false);

    const [translation, setTranslation] = useState(0);


    const track = useRef(null);
    const carousel = useRef(null);
    const childrenWidth = useRef(0);

    const handleResize = useCallback(() => {

      if(carousel){
        if(translation + carousel.current.offsetWidth > track.current.offsetWidth){
          setTranslation(track.current.offsetWidth - carousel.current.offsetWidth);
          setRightButton(false);
        }
        else if(!rightButton){
          setTranslation(track.current.offsetWidth - carousel.current.offsetWidth);
        }
      }
    });

    useEffect( () => {
        childrenWidth.current = children ? (track.current.offsetWidth - ((children.length-1) * gap))/children.length : 0;

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
      
    }, [handleResize]);

    function next(){
      const itensPage = carousel.current.offsetWidth / (childrenWidth.current + gap - 1);
      let nextPage = (translation + itensPage * (childrenWidth.current + gap - 1)) - (childrenWidth.current * (itensPage - Math.floor(itensPage)));
      const onePageWidth = itensPage * (childrenWidth.current + gap - 1);
      nextPage = nextPage > (track.current.offsetWidth - onePageWidth) ? (track.current.offsetWidth - onePageWidth) : nextPage;

      setTranslation(nextPage);

      if(nextPage == (track.current.offsetWidth - onePageWidth)){
        setRightButton(false);
        setLeftButton(true);
      }
      else{
        setRightButton(true);
        setLeftButton(true);
      }
    }

    function previous(){
      const itensPage = carousel.current.offsetWidth / (childrenWidth.current + gap - 1);
      let prevPage = (translation - itensPage * (childrenWidth.current + gap -1)) + (childrenWidth.current * (itensPage - Math.floor(itensPage)));
      prevPage = prevPage < 0 ? 0 : prevPage;
      setTranslation(prevPage);

      if(prevPage == 0){
        setLeftButton(false);
        setRightButton(true);
      }
      else{
        setLeftButton(true);
        setRightButton(true);
      }
    }

  return (
    <div ref = {carousel} className = {styles.carousel} style = {{"minWidth": childrenWidth.current + gap}}>
        {leftButton && <button onClick = {previous} className = {[styles.button, styles["button-left"]].join(" ")}> {"◀"} </button>}
        <div ref = {track} className = {styles.track} style = {{ transform: `translateX(-${translation}px)`, '--gap': `${gap}px`}}>
          {children}
        </div>
        {rightButton && <button onClick = {next} className = {[styles.button, styles["button-right"]].join(" ")}> {"▶"} </button>}
    </div>
  )
}

export default Carousel;