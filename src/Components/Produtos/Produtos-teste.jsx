import React, {useState,useEffect} from 'react';
import api from '../Services/api';
import Test from './Produtos-test';

function Teste () {


    const [produtoscabeceira, setProdutosCabeceira] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const produtoscabeceira = await api.get('/produtos-cabeceira') 
               setProdutosCabeceira(produtoscabeceira.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])

    return(
        <>
        <section className="sec">
            {produtoscabeceira.map((produtoscabeceira) =>(
                <Test produtoscabeceira={produtoscabeceira} key={produtoscabeceira.id}/>
            ) )}
        </section>
        </>
    )
}

export default Teste