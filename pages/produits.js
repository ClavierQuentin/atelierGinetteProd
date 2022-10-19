import { parseRequestUrl,url } from "../utils.js";

const request = parseRequestUrl();

const produits = {
    generate: () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        fetch(url + `categories/${request.id}/produits`,{
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
            console.log(data);
            const produits = data;
            if(produits.length > 0){
                main.innerHTML = `
                <div class="sectionProduits backGroundFleur">
                    <div class="titreProduits">
                        <h3>${produits[0].categorie.nom_categorie} :</h3>
                    </div>
                    <div id="cardsProduits" class="cardsProduits">
                    ${produits.map( 
                        produit =>`
                                <a href="#/pages/produit/${produit.id}" onclick="location.reload()" class="cardProduit">
                                    <div class="conteneurImgProduit">
                                        <img class="imgProduit" src="${produit.url_image_produit}" alt="">
                                    </div>
                                    <label>${produit.nom_produit}</label>
                                    <label>${produit.prix_produit}€</label>
                                </a>
                                `
                                ).join('\n')}
                    </div>
                </div>
                `
                conteneurName.style.position = "relative";

            }else{
                location.assign('#/pages/404')
            }
        
        })
        .catch((err) => {
            console.log(err);
            location.assign('#/pages/404')
        })
    }
}
export default produits;