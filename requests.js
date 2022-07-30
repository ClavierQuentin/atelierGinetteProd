const headers = new Headers();
headers.append('Content-Type', 'application/json');

const Init = {
    method: "GET",
    headers: headers,
    mode: "cors",
    cache: "default"
}

/**Requêtes page About */
const myRequest = new Request("https://frozen-hollows-86473.herokuapp.com/api/about-texte-and-img-1s?populate=*", Init);
const myRequest2 = new Request("https://frozen-hollows-86473.herokuapp.com/api/about-texte-and-img-2s?populate=*", Init);
const myRequest3 = new Request("https://frozen-hollows-86473.herokuapp.com/api/about-texte-and-img-3s?populate=*", Init);
const myRequest4 = new Request("https://frozen-hollows-86473.herokuapp.com/api/about-texte-and-img-4s?populate=*", Init);

/**Requetes catégories */
const requestCategories = new Request("https://frozen-hollows-86473.herokuapp.com/api/categories?populate=*", Init);

export {Init, myRequest, myRequest2, myRequest3, myRequest4, requestCategories};