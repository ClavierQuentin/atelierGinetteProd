import { parseRequestUrl } from "../utils.js";

const request = parseRequestUrl();

const productPage = {
    generate: () =>{
        let main = document.getElementById('main-conteneur');
        fetch(`https://frozen-hollows-86473.herokuapp.com/api/articles/${request.id}?populate=*`,{
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
            const produit = data.data;
            main.innerHTML = `
            <div class="backGroundFleur">
                <div class="sectionPhoto">
                    <img src="https://frozen-hollows-86473.herokuapp.com${produit.attributes.image.data[0].attributes.formats.small.url}" alt="" class="imgProduitUnique">
                    <div class="description1">
                        <h2>${produit.attributes.nom_article}</h2>
                        <div class="prix">
                            <p>
                                ${produit.attributes.prix_article}€ l'unité
                            </p>
                        </div>
                        <div class="descriptionCourte">
                                ${produit.attributes.description_courte} 
                        </div>
                    <!-- <div><button id="boutonAjouter">Ajouter au panier</button></div>-->
                    </div>
                </div>
                <hr>
                <div class="compo">
                    ${produit.attributes.description_longue}
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
        }) 
    }
}
export default productPage;