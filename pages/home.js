import { fonctionCarrousel } from "../scripts/carrousel.js";
import { url } from "../utils.js";

const homePage = {
    generate : () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
     
        Promise.all([
            fetch(url +'produits-accueil',{
                headers:{
                    "Content-Type":"application/json",
                }
            }),
            fetch(url +'categories-accueil',{
                headers:{
                    "Content-Type":"application/json",
                }
            })
        ])
        .then(async([res1, res2]) => {
            const data = await res1.json();
            const data2 = await res2.json();
            return [data, data2]
        })
        .then((data) =>{
            const listImg = data[0];
            const listeCategories = data[1];
            fetch(url +'texte-accueil', {
                headers:{
                    "Content-Type":"application/json",
                }
            })
            .then((res)=>{
                if(res.ok){
                    return res.json();
                }
            })
            .then((result)=>{
                const texte = result;
                main.innerHTML = `
                <header class="whiteFont">
                    <div class="conteneurNew">
                        <h2>Ouverture du site !</h2>
                        <button class="background" id="boutonNouveaute" onclick='window.location = "#/pages/categories"'>Découvrir</button>
                    </div>
                    <div id="conteneur" class="conteneur">
                        <div id="carrousel" class="carrousel">
                        </div>
                    </div>
                </header>
            <!---------------------------------BANNIERE PRESENTATION------------------------>
                <div class="prez">
                            <!--TITRE-->
                    <h2 class="whiteFont">${texte.titre_accueil}</h2>
                </div>
                <!--TEXTE-->
                <div class="banniereCitation">
                    <p class="whiteFont">${texte.texte_accueil}</p>
                </div>
                <!-------------------------------------BANNIERE CATEGORIES---------------------------------------->
            <div class="backGroundFleur">
                <div class="decouvrir">
                    <!--TITRE-->
                    <h2>${texte.titre_categories}</h2>
                </div>
                <div class="categories">
                ${listeCategories.map(
                    listeCategories=>`
                        <!--CATEGORIE-->
                        <a href="#/pages/categories/${listeCategories.id}" >
                            <div>
                                <div class="divImg">
                                    <img class="imgCategorie" src="${listeCategories.url_image_categorie}" alt="">
                                </div
                                <label>${listeCategories.nom_categorie}</label>
                            </div>
                        </a>
                        <!---->
                `
                ).join('\n')}
                </div>
            </div>
            <!----------------------------------BANNIERE PICTOS---------------------------------------->
            <div class="bannierePicto">
                <div>
                    <img src="./img/hand-made.png" alt="">
                    <label class="whiteFont">Fait maison</label>
                </div>
                <div>
                    <img src="./img/icons8-machine-à-coudre-80.png" alt="">
                    <label class="whiteFont">Produits artisanaux</label>
                </div>
                <div>
                    <img src="./img/ecologique.png" alt="">
                    <label class="whiteFont">Eco-responsable</label>
                </div>
            </div>
        
                `
            fonctionCarrousel(listImg);
            conteneurName.style.position = "absolute";
            })
        })
        .catch(function(err){
            console.log(err);
        })
    }    
}

export default homePage;