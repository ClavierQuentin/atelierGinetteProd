/**Page d'affichage d'un produit
 * Nécessite une requete
 */

//Importations
import { parseRequestUrl, url } from "../utils.js";
import { page404 } from "./404.js";

//Je récupère les différents paramètre de l'url
const request = parseRequestUrl();

const productPage = {
    generate: () =>{
        
        //On récupère les éléments HTML
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');

        //Requête
        fetch(url + `produits/${request.id}`,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
            else{
                main.innerHTML = page404;
            }
        })
        //On récupère la réponse en JSON
        .then((data)=>{

            //On stocke la réponse et on affiche le tout
            const produit = data;
            main.innerHTML = `

                <div class="backGroundFleur">

                <!--PREMIER BLOC DE DESCRIPTION-->
                    <div class="sectionPhoto">

                        <!--IMAGE-->
                        <img src="${produit.url_image_produit}" alt="${produit.nom_produit}" class="imgProduitUnique">

                        <div class="description1">

                            <!--NOM ET PRIX-->
                            <h2>${produit.nom_produit}</h2>
                            <div class="prix">
                                <p>
                                    ${produit.prix_produit}€ l'unité
                                </p>
                            </div>

                            <!--DESCRIPTION COURTE-->
                            <div class="descriptionCourte">
                                    ${produit.description_courte_produit} 
                            </div>

                            <div>
                                <button class="background" id="boutonAjouter"><a class="whiteFont"  href="${produit.url_externe}">Voir sur le site marchand</a></button>
                            </div>

                        </div>

                    </div>

                    <hr>

                    <!--DESCRIPTION LONGUE-->
                    <div class="compo">
                        ${produit.description_longue_produit}
                    </div>

                    <!--<hr>
                    <div>
                        <h3 class="titreProduitEquivalent">Vous pourriez aussi aimer :</h3>
                    </div>-->
                </div>
            `
            conteneurName.style.position = "relative";    
        })
        .catch((err)=>{
            //En cas d'erreur on affiche un message
            console.log(err);
        }) 
    }
}
export default productPage;