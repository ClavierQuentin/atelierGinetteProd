/**Fonctions pour différentes requêtes au back */

//On récupère l'URI de l'API
import { url } from "./utils.js"; 

//Instance du header de la requète
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('method', 'GET');
headers.append('mode', 'cors');
headers.append('cache', 'default');


/**REquêtes page d'accueil */
const requestAccueilProduits = new Request(url + 'produits-accueil', headers);
const requestAccueilCategories = new Request(url + 'categories-accueil', headers);
const requestAccueilTexts = new Request(url + 'texte-accueil', headers);

/**Requêtes page About */
const requestAbout1 = new Request(url + "premiere-banniere", headers);
const requestAbout2 = new Request(url + "deuxieme-banniere", headers);
const requestAbout3 = new Request(url + "troisieme-banniere", headers);

/**Requetes catégories */
const requestCategories = new Request(url + "categories", headers);

//Export 
export { requestAbout1, requestAbout2, requestAbout3, requestCategories, requestAccueilProduits, requestAccueilCategories, requestAccueilTexts, headers};