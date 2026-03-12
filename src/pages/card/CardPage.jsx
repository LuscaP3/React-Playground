import styles from './cardPage.module.css'
import Card from '../../components/card/Card.jsx'

function CardPage(){

    return(
        <div className = {styles.card}>
            <h1>Card</h1>
            <p>Componente visual que exibe uma imagem dentro de um card estilizado com brilho nas bordas. Ao passar o mouse, o card ganha um leve efeito de perspectiva, criando uma sensação de profundidade e movimento. Além disso, o brilho reage à posição do cursor, gerando um efeito dinâmico de iluminação que destaca o elemento e torna a interação mais envolvente.</p>
            <p>Background adicionado somente para que seja possível visualizar o brilho nas existente nas bordas do Card.</p>

            <div className = {styles.container}>
                <div className = {styles['card-wrapper']}> <Card src = {'./cards/mew.png'}></Card> </div>
            </div>
        </div>
    );
}

export default CardPage;