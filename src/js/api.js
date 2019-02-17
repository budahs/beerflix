'use strict';
const API_KEY = '1JEZPD1-HSCMEHQ-PJF9AGJ-9HHB74P';
const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers') => {
    const SEARCH_URL = `${API_URL}?search=`;
    const BEERS_URL = `${API_URL}`;
    //const SET_COMMENT = `${API_URL}/${ID}/comment`;
    return {
        createComment: async (id,text,slug) => {
            try {     
                const response = await fetch(`${API_URL}/${id}/${slug}`,{
                    headers:
                    {
                        'X-API-KEY' : API_KEY,
                        'Content-Type' : 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        "comment": text
                      }),
                });
                const data = await response.json();
                return data; 
            }catch(e){
                console.error(e);
            }
        },
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
        },
        getSingleBeer : async (id) => {
            try {
                const response = await fetch(`${BEERS_URL}/${id}`,{
                    headers:
                    {
                        'X-API-KEY' : '1JEZPD1-HSCMEHQ-PJF9AGJ-9HHB74P',
                        'accept' : 'application/json'
                    }
                });
                const beer = response.json();
                return beer;
            }catch(e){
                console.error(e);
            }
            
        }
    };
};

export default api;