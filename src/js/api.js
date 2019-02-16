'use strict';
const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers') => {
    const SEARCH_URL = `${API_URL}?search=`;
    const BEERS_URL = `${API_URL}`;
    const BEER_URL = `${API_URL}/`;
    //const SET_LIKE = `${API_URL}/${ID}/like`;
    //const SET_COMMENT = `${API_URL}/${ID}/comment`;
    return {
        getBeers : async (query) => {
            try{
                const requestUrl = query ? `${SEARCH_URL}${query}`: BEERS_URL;
                const response = await fetch(requestUrl,{
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
        }
    };
};

export default api;