import styles from './sliderPage.module.css'
import Slider from '../../components/slider/Slider.jsx'
import { useState } from 'react';

function SliderPage(){
    const [value, setValue] = useState(0);

    return(
        <div className = {styles.slider}>
            <h1>Slider</h1>
            <p> Componente que permite ao usuário selecionar um valor ou posição dentro de um intervalo movendo um controle deslizante horizontal. É muito usado para ajustar volumes, níveis de brilho ou escolher valores numéricos dentro de um limite. </p>
            <p>Este componente recebe os props: <span>onChange</span>, <span>color</span>, <span>size</span>, <span>minValue</span>, <span>maxValue</span>, e <span>initialValue</span>.</p>
            <Slider onChange = { (e) => setValue(Math.round(e))} color = '#8ed691'/>
            <p>{value}</p>
        </div>
    );
}

export default SliderPage;