import React, {useState,useEffect} from 'react';
import api from '../Services/api';
// import './responsividade.css';

function Test ({produtos}) {

    return(
        <div>
            <section className="cor-fundo">
            <section class="flex">
                <figure>
                  <img src={produtos.url} alt="Todas poltronas" />
                  <figcaption>
                    DESCRIÇÃO1
                  </figcaption>
                </figure>
            </section>
            </section>
        </div>
    )
}

export default Test;