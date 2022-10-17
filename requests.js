import { url } from "./utils.js";

const headers = new Headers();
headers.append('Content-Type', 'application/json');


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
// const myRequest4 = new Request("https://frozen-hollows-86473.herokuapp.com/api/about-texte-and-img-4s?populate=*", Init);

/**Requetes catégories */
const requestCategories = new Request(url + "categories", Init);

export {Init, myRequest, myRequest2, myRequest3, requestCategories};