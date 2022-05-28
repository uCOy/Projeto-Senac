import React, {useState,useEffect} from 'react';
import '../Sofas.css';

function Cabeceira ({produtoscabeceira}) {

    return(
        <>
            <ul className='ul'>
              <li className="lia"><img className='imagess' src={produtoscabeceira.url} alt="Todas poltronas" /></li>
              <li className='li'>{produtoscabeceira.text}</li>
            </ul>
        </>
    )
}

export default Cabeceira;