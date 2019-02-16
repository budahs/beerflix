'use strict';
const getBeers = async () => {
    try{
        const response = await fetch('https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers',{
            headers:
            {
                'X-API-KEY' : '1JEZPD1-HSCMEHQ-PJF9AGJ-9HHB74P',
                'accept' : 'application/json'
            }
        });
        const data = await response.json();
        return data;  
    }catch(e){
        console.error(e);
        throw e;
    }    
};

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
            <a href="https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers/${beerId}" class="details"><strong>Details</strong><i class="fas fa-external-link-alt"></i></a>
        </footer>
    </article>
    </div>
`;

const renderBeers = (givenElement,beers) =>{
    const htmlBlock = beers.slice(0, 12).map((beer,beerIndex) => {
        return templateBeer(beer);
    }).join('');
    givenElement.innerHTML = htmlBlock;
}

const setDOMElements = async () => {
    try{
        const fetchBeers = await getBeers();
        const DOMParent = document.getElementById('products');
        renderBeers(DOMParent,fetchBeers.beers);
    }catch(e){
        console.error(e);
        throw e;
    } 
}

setDOMElements();


