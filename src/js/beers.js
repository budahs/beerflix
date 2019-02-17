'use strict';
import api from './api';
const {getBeers} = api();

const templateBeer = ({image,name,description,likes,price,beerId}) => `
    <div class="product">
    <header>
        <img src="${image}" alt="titulo">
    </header>
    <article>
        <h2>${name}</h2>
        <p>${description.split(' ').length >= 40 ? (description.split(' ').slice(0,40).join(' ') + ' ...'): description}</p>
        <footer>                    
            <div class="likes"><i class="fas fa-thumbs-up"></i><strong>Likes</strong> ${likes}</div>
            <div class="price"><strong>Price</strong> ${price}<i class="fas fa-euro-sign"></i></div>
            <a href="/beer.html?beer=${beerId}" class="details"><strong>Details</strong><i class="fas fa-external-link-alt"></i></a>
        </footer>
    </article>
    </div>
`;

const renderBeers = (givenElement,beers,year) =>{
    if(year){
        beers = beers.filter(function(beer, index, arr){
            if(beer.firstBrewed.indexOf(year) >= 0){
                return beer;
            }        
        });        
    };
    const htmlBlock = beers.slice(0, 12).map((beer,beerIndex) => {
        return templateBeer(beer);
    }).join('');
    givenElement.innerHTML = htmlBlock;
}
// const htmlBlock se puede hacer refactor a const htmlBlock = beers.slice(0, 12).map(templateBeer).join('');

export const setDOMElements = async (inputData) => {
    try{
        let query ='';let year='';
        if(inputData){
            if(inputData.hasOwnProperty("year"))year = inputData.year;
            if(inputData.hasOwnProperty("search"))query = inputData.search;
        }                
        const fetchBeers = await getBeers(query);
        const DOMParent = document.getElementById('products');
        renderBeers(DOMParent,fetchBeers.beers,year);
    }catch(e){
        console.error(e);
        throw e;
    } 
}

setDOMElements();


