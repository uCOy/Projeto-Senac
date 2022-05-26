import React, {useState,useEffect} from 'react';
import api from '../Services/api';
import Test from './Produtos-test';

function Teste () {


    const [slider, setSlider] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const slider = await api.get('/produtos') 
               setSlider(slider.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])

    return(
        <div>
            {slider.map((produtos) =>(
                <Test produtos={produtos} key={produtos.id}/>
            ) )}
        </div>
    )
}

export default Teste