import React, {useState,useEffect} from 'react';
import '../Sofas.css';

function Retratil ({sofasretratil}) {

    return(
        <>
            <ul className='ul'>
              <li className="lia"><img className='imagess' src={sofasretratil.url} alt="Todos-Sofas-Retratil" /></li>
              <li className='li'>{sofasretratil.text}</li>
            </ul>
        </>
    )
}

export default Retratil;