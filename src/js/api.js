'use strict';
const API_KEY = 'API key';
const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers') => {
    const SEARCH_API_URL = `${API_URL}search/shows?q=`;
    const SHOWS_URL = `${API_URL}shows`;
    return {        
        getShows : async (query) => {           
            try {
                const requestUrl = query ? `${SEARCH_API_URL}${query}`: SHOWS_URL;
                console.log(requestUrl,'-------------->');                
                const response = await fetch(requestUrl);
                const datos = await response.json();
                const mapDatos = datos.map((dato) => {
                    if(dato.show){
                        return dato.show;
                    }
                    return dato;
                })
                return mapDatos;
            }catch(e){
                console.error(e);
                throw e;
            } 
        }
    };
};
consoile.log();
export default api;