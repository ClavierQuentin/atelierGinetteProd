import { parseRequestUrl, getPanier, setPanier, ajouterAuPanier  } from "../utils.js";

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
                    <img src="${produit.attributes.image.data[0].attributes.formats.small.url}" alt="" class="imgProduitUnique">
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
                        <div id="produitPresent">Produit déjà sélectionné</div>
                    <div><button id="boutonAjouter">Ajouter au panier</button></div>
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
            document.getElementById("boutonAjouter").addEventListener('click', () =>{
                ajouterAuPanier({
                    "id": request.id,
                    "nom": produit.attributes.nom_article,
                    "img": produit.attributes.image.data[0].attributes.formats.small.url,
                    "prix": produit.attributes.prix_article,
                    "qte": 1
                });

            })
        })
        .catch((err)=>{
            console.log(err);
        }) 
    }
}
export default productPage;