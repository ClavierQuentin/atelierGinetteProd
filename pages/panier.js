import { getPanier, setPanier } from "../utils.js";

const panier = {
    generate : () =>{
        let main = document.getElementById('main-conteneur');
        let panier = getPanier();
        const conteneurName = document.getElementById('conteneurName');
        main.innerHTML = `
        <div class="basket backGroundFleur">
            <div class="pagePanier">
                <h3>Votre panier</h3>
                <div>
                    ${
                        panier.length === 0? '<div>Votre panier est vide <a href="/#/">Retour à l\'accueil</a></div>':
                        panier.map(produit => `
                        <div class="produitPanier">
                        <div class="divImageProduitPanier">
                            <img src="${produit.img}" alt="" class="imgProduitPanier">
                        </div>
                        <div class="nomProduitPanier">
                            <div>
                                <a href="#/pages/produit/${produit.id}">${produit.nom}</a>
                            </div>
                            <div class="colonneAlignee">
                                Qté : ${produit.qte}
                                <button id="${produit.id}" class="delete-button">Supprimer</button>
                            </div>
                        </div>
                        <div class="prixProduitPanier">
                            ${produit.prix}€
                        </div>
                    </div>
    
                        `).join('\n')
                    }
                </div>
            </div>
            <div class="sousTotal">
                    <h3>Sous-Total (${panier.reduce((a,c) => a + c.qte, 0)} produit(s)) : ${panier.reduce((a,c) => a+c.prix*c.qte, 0)}€</h3>
                    <a href="#/pages/paiement"><button class="boutonCheckout" id="boutonCheckout">Procéder au paiement</button></a>
            </div>
        </div>
        `
        conteneurName.style.position = "relative";
        Array.from(document.getElementsByClassName('delete-button')).forEach(element => {
            element.addEventListener('click', () => {
                let panier = getPanier();
                for(let i = 0; i < panier.length; i++){
                    if(panier[i].id == element.id){
                        panier.splice(i, 1);
                    }
                };
                setPanier(panier);
                location.reload();       
            })
        })
    }
}

export default panier;