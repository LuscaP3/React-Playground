import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
import { useState } from 'react';

function Navbar(){
    const [page, setPage] = useState('home');

    return(
        <div className = {styles.navbar}>
            <nav>
                <ul>
                    <li><Link to="/"         className = {page == 'home' ? ['link', styles['current-page']].join(' ') : 'link'}      onClick = {() => setPage('home')}>     Home     </Link></li>
                    <li><Link to="/slider"   className = {page == 'slider' ? ['link', styles['current-page']].join(' ') : 'link'}    onClick = {() => setPage('slider')}>   Slider   </Link></li>
                    <li><Link to="/switch"   className = {page == 'switch' ? ['link', styles['current-page']].join(' ') : 'link'}    onClick = {() => setPage('switch')}>   Switch   </Link></li>
                    <li><Link to="/carousel" className = {page == 'carousel' ? ['link', styles['current-page']].join(' ') : 'link'}  onClick = {() => setPage('carousel')}> Carousel </Link></li>
                    <li><Link to="/card"     className = {page == 'card' ? ['link', styles['current-page']].join(' ') : 'link'}      onClick = {() => setPage('card')}>     Card     </Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;