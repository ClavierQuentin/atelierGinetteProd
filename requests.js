/**Fonctions pour différentes requêtes au back */

//On récupère l'URI de l'API
import { url } from "./utils.js"; 

//Déclaration du header de la requète
const headers = new Headers();
headers.append('Content-Type', 'application/json');

//Déclarations des différentes options
const Init = {
    method: "GET",
    headers: headers,
    mode: "cors",
    cache: "default"
}

/**Requêtes page About */
const myRequest = new Request(url + "premiere-banniere", Init);
const myRequest2 = new Request(url + "deuxieme-banniere", Init);
const myRequest3 = new Request(url + "troisieme-banniere", Init);

/**Requetes catégories */
const requestCategories = new Request(url + "categories", Init);

export {Init, myRequest, myRequest2, myRequest3, requestCategories};