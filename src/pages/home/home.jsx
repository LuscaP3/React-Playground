import { Link } from 'react-router-dom';
import styles from './home.module.css'

function Home(){

    return(
        <div className = {styles.home}>
            <img src = './React-icon.png'></img>
            <h1> Estudo react </h1>
            <p>
            Este projeto foi criado como um ambiente de estudo para praticar o desenvolvimento de interfaces com React.
            Nele experimento a criação de componentes reutilizáveis, organização de código e diferentes formas de estruturar aplicações front-end modernas.
            </p>
        </div>
    );
}

export default Home;