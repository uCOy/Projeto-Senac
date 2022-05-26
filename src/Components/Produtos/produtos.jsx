import React from 'react';
import './responsividade.css';
import './produtos.css';
import cabeceira1 from "../../Components/Produtos/img/cabeceira-1.png";
import cabeceira2 from "../../Components/Produtos/img/cabeceira-2.png";
import cabeceira3 from "../../Components/Produtos/img/cabeceira-3.png";
import cabeceira4 from "../../Components/Produtos/img/cabeceira-4.png";

import poltrona1 from "../../Components/Produtos/img/poltrona-1.png";
import poltrona2 from "../../Components/Produtos/img/poltrona-2.png";
import poltrona3 from "../../Components/Produtos/img/poutrona-3.png";
import poltrona4 from "../../Components/Produtos/img/poltrona-4.png";

import puff1 from "../../Components/Produtos/img/puff-1.png";
import puff2 from "../../Components/Produtos/img/puff-2.png";
import puff3 from "../../Components/Produtos/img/puff-3.png";
import puff4 from "../../Components/Produtos/img/puff-4.png";




const Produtos = () => {
    return (
        <section className="cor-fundo">
          <div>
            <h1 class="titulo-produto">Produtos</h1>
          </div>
          <div class="sofa-retratil">
            <h1 class="titulo-produtos">Poltronas</h1>
          </div>
          <section class="flex">
            <figure>
              <img src={poltrona1} alt="Todas poltronas" />
              <figcaption>
                DESCRIÇÃO1
              </figcaption>
            </figure>
            <figure>
              <img src={poltrona2} alt="Todas poltronas" />
              <figcaption>
                DESCRIÇÃO2
              </figcaption>
            </figure>
            <figure>
              <img src={poltrona3} alt="Todas poltronas" />
              <figcaption>
                DESCRIÇÃO3
              </figcaption>
            </figure>
            <figure>
              <img src={poltrona4} alt="Todas poltronas" />
              <figcaption>
                DESCRIÇÃO4
              </figcaption>
            </figure>
            </section>
            <div class="sofa-2-3">
              <h1 class="titulo-produtos">Cabeceiras</h1>
            </div>
            <section class="flex">
              <figure>
                <img src={cabeceira1} alt="As cabeceiras" />
                <figcaption>
                  DESCRIÇÃO5
                </figcaption>
              </figure>
              <figure>
                <img src={cabeceira2} alt="As cabeceiras" />
                <figcaption>
                  DESCRIÇÃO6
                </figcaption>
              </figure>
              <figure>
                <img src={cabeceira3} alt="As cabeceiras" />
                <figcaption>
                  DESCRIÇÃO7
                </figcaption>
              </figure>
              <figure>
                <img src={cabeceira4} alt="As cabeceiras" />
                <figcaption>
                  DESCRIÇÃO8
                </figcaption>
              </figure>
              </section>
              <div class="sofa-canto-alemao">
                <h1 class="titulo-produtos">Puffs</h1>
              </div>
              <section class="flex">
                <figure>
                  <img src={puff1} alt="Todos puffs" />
                  <figcaption>
                    DESCRIÇÃO9
                  </figcaption>
                </figure>
                <figure>
                  <img src={puff2} alt="Todos puffso" />
                  <figcaption>
                    DESCRIÇÃO10
                  </figcaption>
                </figure>
                <figure>
                  <img src={puff3} alt="Todos puffso" />
                  <figcaption>
                    DESCRIÇÃO11
                  </figcaption>
                </figure>
                <figure>
                  <img src={puff4} alt="Todos puffso" />
                  <figcaption>
                    DESCRIÇÃO12
                  </figcaption>
                </figure>
                </section>
        </section>
      );
    };
    
    export default Produtos;
