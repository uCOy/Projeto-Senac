import React, {useState,useEffect} from 'react';
import api from '../Services/api';
import './Podutos.css';
import './responsividade.css';

function Test ({produtoscabeceira}) {

    return(
        <>
            <ul className='ul'>
              <img className='imagess' src={produtoscabeceira.url} alt="Todas poltronas" />
              <li className='li'>{produtoscabeceira.text}</li>
            </ul>
        </>
    )
}

export default Test;