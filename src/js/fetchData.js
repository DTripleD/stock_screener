// Stock info in header search
export function showStocks(name){
    const API_KEY = "UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP"; 
    return fetch(`https://api.polygon.io/v2/aggs/ticker/${name}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`).then((response) => { return response.json()})
}






