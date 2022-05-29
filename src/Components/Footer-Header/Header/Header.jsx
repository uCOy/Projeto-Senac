import React from 'react';
import './Header.css';
import Logo from '../../../assets/images/logo.png';

function Header(){
    return(
        <div>
            <header>
                <nav className="nav-header">
                    <div>
                        <a href="/"><img src={Logo} className="logo-header" alt="Logo"/></a>
                    </div>
                    <button className="button-menu-header">&#9776;</button>
                    <ul className="ul-menu-header">
                        <a href="/Sobre" className='menu-link'>Sobre Nós</a>
                        <a href="/Sofa" className='menu-link'>Sofás</a>   
                        <a href="/Produtos" className='menu-link'>Produtos</a>   
                        <a href="/Contato" className='menu-link'>Contato</a>      
                    </ul>
                </nav>
            </header>
        </div>
    )
} 

export default Header;