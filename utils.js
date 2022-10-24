//Fonction pour décomposer l'URL et en contrôler la sortie
const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    console.log(request);
    return{
        page: request[0],
        destination: request[1],
        id: request[2]
    } ;
}

//URI pour requêtes
const url = "https://api-atelier.herokuapp.com/api/";
// const url ="http://127.0.0.1:8000/api/";

export { parseRequestUrl, url };