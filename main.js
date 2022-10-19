/**Importation des différentes pages pour l'affichage dynamique */
import aboutPage from "./pages/about.js";
import categories from "./pages/categories.js";
import contactPage from "./pages/contact.js";
import homePage from "./pages/home.js";
import productPage from "./pages/productPage.js";
import produits from "./pages/produits.js";
import page404 from "./pages/404.js";

/**Fonction pour décomposer l'url */
import { parseRequestUrl } from "./utils.js";

/**Déclaration des routes et des url possibles */
const routes = {
    "/" : homePage,
    "/pages": homePage,
    "/pages/about": aboutPage,
    "/pages/categories": categories,
    "/pages/categories/id": produits,
    "/pages/produit/id": productPage,
    "/contact": contactPage,
    "/pages/admin":true,
    "/pages/404": page404
}

/**Déclaration de la fonction router() 
 * Direction vers la page JS correspondante selon l'URL
 */
const router = () =>{ 

    //On décompose l'url 
    const request = parseRequestUrl();

    /**On contrôle l'url et les paramètres qui y sont entrées
     * Si rien n'est indiqué nous forçons avec un champs vide
     * Ainsi on sécurise les routes au minimun
     */
    const parseUrl = (request.page? `/${request.page}` : '/') + (request.destination? `/${request.destination}` : "") + (request.id? `/id` : "");

    //On déclare une nouvelle variable qui stocke la page JS
    const screen = routes[parseUrl]? routes[parseUrl] : "";

    //Controle pour le passage au dashboard en back
    if(request.destination == "admin"){
        location.assign('https://api-atelier-dev-dashboard.herokuapp.com/');
    }
        
    //On lance la fonction generate() présente dans chaque page JS
    screen.generate();
}

//Au chargement de la fenêtre on appelle router()
window.addEventListener('load', () =>{
    router();
});

//A chaque changement d'url on appelle router()
window.addEventListener('hashchange', () =>{
    router();

    //On force un refresh de la page lors d'une recherche d'un ID
    const request = parseRequestUrl();
    if(request.id){
        location.reload()
    }
    //On fait remonter l'utilisateur en haut de la page
    document.documentElement.scrollTop = 0;
});