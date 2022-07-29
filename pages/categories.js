import { requestCategories, Init } from "../requests.js";

const categories = {
    generate: () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        fetch(requestCategories, Init)
        .then((res) => {
            if(res.ok){
                return res.json();
            }
        })
        .then((data) => {
            const listeCategories = data.data;
            main.innerHTML = `
            <div class="sectionProduits backGroundFleur">
                <div class="titreProduits">
                    <h3>Toutes les catégories :</h3>
                </div>
                <div id="cardsProduits" class="cardsProduits">
                    ${listeCategories.map( 
                        listeCategories =>`
                            <a href="#/pages/categories/${listeCategories.id}" onclick="location.reload()" class="card">
                                <div class="conteneurImgCard">
                                    <img class="imgCardProduit" src="http://localhost:1337${listeCategories.attributes.image_categories.data[listeCategories.attributes.image_categories.data.length-1].attributes.formats.small.url}" alt="">
                                </div>
                                <label>${listeCategories.attributes.nom_categorie}</label>
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

export default categories;