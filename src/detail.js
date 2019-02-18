'use strict';
import './styles/detail.scss';
import './js/commentForm';
import api from './js/api';
const {getSingleBeer} = api();
const beerTemplate = ({image,name,description,beerId,likes,price,firstBrewed}) => `
    <header id="${beerId}"> 
        <div class="container">       
            <h1><i class="fas fa-beer"></i>${name}</h1>                
        </div>
    </header>
    <div class="content">
        <div class="image-container">
            <img src="${image}" />
        </div>
        <div class="beerData">
            <p>${description}</p>            
        </div>
        <div class="properties">
            <span class="brewed">First Brewed in ${firstBrewed}</span><span class="likes">Likes ${likes}</span><span class="price">Price ${price}</span>
        </div>        
    </div>
`;
const commentTemplate = ({comment,dateComment}) => `
    <div class="comment">"${comment}"<span>${dateComment.split('T')[0]}</span></div>
`;
(async () => {
    try{
        const [,id] = window.location.search.split ? window.location.search.split('=') : [];
        const beer = await getSingleBeer(id);
        const showBeer = beerTemplate(beer.beer);
        if(beer.beer.comment){
            const commentsHTML = beer.beer.comment.map((comment) =>{
               return commentTemplate(comment);
            }).join('')
            document.getElementById('printComments').innerHTML = commentsHTML;
        }        
        document.getElementById('detail').innerHTML = showBeer;
    }catch(e){
        console.error(e);
    }
})()