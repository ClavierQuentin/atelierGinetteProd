import { carrouselAbout } from "../scripts/carrouselAbout.js";
import { Init, myRequest, myRequest2, myRequest3, myRequest4 } from "../requests.js";

const aboutPage = {
    generate : () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');

        Promise.all([
            fetch(myRequest,Init),
            fetch(myRequest2,Init),
            fetch(myRequest3,Init),
            fetch(myRequest4,Init)
        ])
        .then(async([res1, res2, res3, res4]) => {
            const data1 = await res1.json();
            const data2 = await res2.json();
            const data3 = await res3.json();
            const data4 = await res4.json();
            return [data1, data2, data3, data4];
        })
        .then((data) => {
            const ban1 = data[0].data;
            const ban2 = data[1].data;
            const ban3 = data[2].data;
            const ban4 = data[3].data;
            main.innerHTML = `
            <!-----------------BANNIERE QUI JE SUIS--------------------->
            <div class="banniere quiJeSuis backGroundFleur">
                <div class="divTexte">
                    <!--TITRE-->
                    <h2>${ban1[ban1.length-1].attributes.Titre}</h2>
                    <!--TEXTE-->
                    ${ban1[ban1.length-1].attributes.Texte}
                </div>
                <!--IMAGE-->
                <div class="portrait">
                    <img src="${ban1[ban1.length-1].attributes.image.data.attributes.formats.small.url}" alt="">
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
                    <h2>${ban2[ban2.length-1].attributes.Titre}</h2>
                    ${ban2[ban2.length-1].attributes.Texte}
                </div>
            </div>
            <!------------------------------------BANNIERE VALEURS----------------------------------->
            <div class="backGroundFleur">
                <div>
                    <!--TITRE-->
                    <h2 class="titreValeurs" >Nos valeurs</h2>
                    <div class="banniere " style="padding-top: 20px; padding-bottom: 10%">
                        <div class="divTexte">
                            <!--TITRE-->
                            <h2>${ban3[ban3.length-1].attributes.Titre}</h2>
                            <!--TEXTE-->
                            ${ban3[ban3.length-1].attributes.Texte}
                        </div>
                        <!--IMAGE-->
                        <div>
                            <img class="paysage" src="${ban3[ban3.length - 1].attributes.Image.data.attributes.formats.small.url}" alt="">
                        </div>
                    </div>
                </div>
                <div class="banniere wrapReverse" style="padding-bottom: 80px;">
                    <!--IMAGE-->
                    <div>
                        <img style="width=333px; height:auto;" src="${ban4[ban4.length - 1].attributes.Image.data.attributes.formats.small.url}" alt="">
                    </div>
                    <div class="divTexte">
                        <!--TITRE-->
                        <h2>${ban4[ban4.length-1].attributes.Titre}</h2>
                        <!--TEXTE-->
                        ${ban4[ban4.length-1].attributes.Texte}
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