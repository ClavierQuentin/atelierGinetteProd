import { parseRequestUrl } from "../utils.js";

const request = parseRequestUrl();

const produits = {
    generate: () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        fetch(`http://localhost:1337/api/categories/${request.id}?populate[articles][populate][0]=image`,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
        })
        .then((data)=>{
            const produits = data.data;
            main.innerHTML = `
            <div class="sectionProduits backGroundFleur">
                <div class="titreProduits">
                    <h3>${produits.attributes.nom_categorie} :</h3>
                </div>
                <div id="cardsProduits" class="cardsProduits">
                ${produits.attributes.articles.data.map( 
                    produit =>`
                            <a href="#/pages/produit/${produit.id}" onclick="location.reload()" class="cardProduit">
                                <div class="conteneurImgProduit">
                                    <img class="imgProduit" src="http://localhost:1337${produit.attributes.image.data[0].attributes.formats.small.url}" alt="">
                                </div>
                                <label>${produit.attributes.nom_article}</label>
                                <label>${produit.attributes.prix_article}€</label>
                            </a>
                            `
                            ).join('\n')}
                </div>
            </div>
            `
            conteneurName.style.position = "relative";
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
export default produits;