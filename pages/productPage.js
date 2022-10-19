import { parseRequestUrl, url } from "../utils.js";
import produits from "./produits.js";

const request = parseRequestUrl();

const productPage = {
    generate: () =>{
        let main = document.getElementById('main-conteneur');
        fetch(url + `produits/${request.id}`,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
        })
        .then((data)=>{
            const produit = data;
                main.innerHTML = `
                <div class="backGroundFleur">
                    <div class="sectionPhoto">
                        <img src="${produit.url_image_produit}" alt="" class="imgProduitUnique">
                        <div class="description1">
                            <h2>${produit.nom_produit}</h2>
                            <div class="prix">
                                <p>
                                    ${produit.prix_produit}€ l'unité
                                </p>
                            </div>
                            <div class="descriptionCourte">
                                    ${produit.description_courte_produit} 
                            </div>
                            <div>
                                <button class="background" id="boutonAjouter"><a class="whiteFont"  href="${produit.url_externe}">Voir sur le site marchand</a></button>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="compo">
                        ${produit.description_longue_produit}
                    </div>
                    <!--<hr>
                    <div>
                        <h3 class="titreProduitEquivalent">Vous pourriez aussi aimer :</h3>
                    </div>-->
                </div>
                `    
        })
        .catch((err)=>{
            console.log(err);
            location.assign('#/pages/404')
        }) 
    }
}
export default productPage;