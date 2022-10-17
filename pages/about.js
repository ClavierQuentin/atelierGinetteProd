import { carrouselAbout } from "../scripts/carrouselAbout.js";
import { Init, myRequest, myRequest2, myRequest3 } from "../requests.js";

const aboutPage = {
    generate : () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');

        Promise.all([
            fetch(myRequest,Init),
            fetch(myRequest2,Init),
            fetch(myRequest3,Init),
            // fetch(myRequest4,Init)
        ])
        .then(async([res1, res2, res3, res4]) => {
            const data1 = await res1.json();
            const data2 = await res2.json();
            const data3 = await res3.json();
            // const data4 = await res4.json();
            return [data1, data2, data3];
        })
        .then((data) => {
            const ban1 = data[0];
            const ban2 = data[1];
            const ban3 = data[2];
            // const ban4 = data[3].data;
            main.innerHTML = `
            <!-----------------BANNIERE QUI JE SUIS--------------------->
            <div class="banniere quiJeSuis backGroundFleur">
                <div class="divTexte">
                    <!--TITRE-->
                    <h2>${ban1.titre}</h2>
                    <!--TEXTE-->
                    ${ban1.texte}
                </div>
                <!--IMAGE-->
                <div class="portrait">
                    <img src="${ban1.url_image}" alt="">
                </div>
            </div>
            <!---------------------------------BANNIERE LIEU-------------------------------->
            <div class="lieu banniere">
                <!--CARROUSEL-->
                <div class="conteneurCarrousel" id="conteneurCarrousel">
                    <div id="carrouselPrez" class="carrousel">
                    </div>
                </div>
                <!--TEXTE-->
                <div class="divTexte">
                    <h2>${ban2.data.titre}</h2>
                    ${ban2.data.texte}
                </div>
            </div>
            <!------------------------------------BANNIERE VALEURS----------------------------------->
            <div class="backGroundFleur">
                <div>
                    <!--TITRE-->
                    <h2 class="titreValeurs" >${ban3.titre_principal}</h2>
                    <div class="banniere " style="padding-top: 20px; padding-bottom: 10%">
                        <div class="divTexte">
                            <!--TITRE-->
                            <h2>${ban3.titre_1}</h2>
                            <!--TEXTE-->
                            ${ban3.texte_1}
                        </div>
                        <!--IMAGE-->
                        <div>
                            <img class="paysage" src="${ban3.url_image}" alt="">
                        </div>
                    </div>
                </div>
                <div class="banniere wrapReverse" style="padding-bottom: 80px;">
                    <!--IMAGE-->
                    <div>
                        <img style=" height:500px;" src="${ban3.url_image_2}" alt="">
                    </div>
                    <div class="divTexte">
                        <!--TITRE-->
                        <h2>${ban3.titre_2}</h2>
                        <!--TEXTE-->
                        ${ban3.texte_2}
                    </div>
                </div>
            </div>
    
            `
            carrouselAbout(ban2);
            conteneurName.style.position = "relative"
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default aboutPage;