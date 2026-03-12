import styles from './switchPage.module.css'
import Switch from '../../components/switch/Switch.jsx'
import { useState } from 'react';

function SwitchPage(){
    const [value, setValue] = useState(true);

    return(
        <div className = {styles.switch}>
            <h1>Switch</h1>
            <p> Componente de alternância usado para ligar ou desligar uma opção. Visualmente semelhante a um interruptor, ele representa estados binários como <span>ativado/desativado</span> ou <span>verdadeiro/falso</span>. </p>
            <p>Este componente recebe os props: <span>onSwitch</span>, <span>color</span>, <span>size</span>, <span>status</span>.</p>

            <Switch onSwitch = { (e) => setValue(e)} color = '#8ed691' size = {1.2}/>
            <p>{value ? 'Verdadeiro' : 'Falso'}</p>
        </div>
    );
}

export default SwitchPage;