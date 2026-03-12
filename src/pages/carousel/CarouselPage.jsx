import styles from './carouselPage.module.css'
import Carousel from '../../components/carousel/Carousel.jsx'
import Card from '../../components/card/Card.jsx';

function CarouselPage(){


    return(
        <div className = {styles.carousel}>
            <h1>Carrossel</h1>
            <p> Componente que exibe uma sequência de conteúdos (como imagens, cards ou textos) em um espaço limitado, permitindo navegar entre eles através de botões. É comum em galerias e destaques de conteúdo. </p>
            <p>Os conteúdos exibidos são <span>children</span> do carrossel.</p>
            <p>Este componente recebe os props: <span>gap</span></p>
            <Carousel gap ={20}>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/absol.png'}/> </div>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/bulbasaur.jpeg'}/> </div>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/charizard.png'}/> </div>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/dragonite.png'}/> </div>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/froslass.png'}/> </div>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/gengar.jpeg'}/> </div>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/mew.png'}/> </div>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/pikachu.png'}/> </div>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/umbreon.jpeg'}/> </div>
            </Carousel>
        </div>
    );
}

export default CarouselPage;