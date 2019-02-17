'use strict';
import './styles/detail.scss';
import './js/commentForm';
import api from './js/api';
const {getSingleBeer} = api();
const beerTemplate = ({image,name,description,beerId}) => `
    <header id="${beerId}">
        <div class="title-section">
            <h1>${name}</h1>
        </div>
        <div class="image-container">
            <img src="${image}" />
        </div>
    </header>
    <div class="content">
        ${description}
    </div>
`;
(async () => {
    try{
        const [,id] = window.location.search.split ? window.location.search.split('=') : [];
        const beer = await getSingleBeer(id);
        const showBeer = beerTemplate(beer.beer);
        document.getElementById('detail').innerHTML = showBeer;
    }catch(e){
        console.error(e);
    }
})()