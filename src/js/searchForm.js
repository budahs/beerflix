'use strict';
import {setDOMElements} from './beers';
const searchForm = document.getElementById('search');
const beerInput = document.querySelector('.input.beer');
const yearInput = document.querySelector('.input.year');

searchForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    const inputData = {};
    if(beerInput.value != ''){
        inputData.search = beerInput.value;        
    }
    if(yearInput.value != ''){
        inputData.year = yearInput.value;        
    }
    setDOMElements(inputData);
})

