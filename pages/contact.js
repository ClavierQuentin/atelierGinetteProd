/**Page de contact du site internet
 * Validation du recaptcha Google via une requête POST vers le back-end de l'application
 * Création du formulaire selon la réponse de la réquête
 */

//Importation du script pour l'envoie des données du formulaire et de l'URI
import { contact } from "../scripts/contactScript.js";
import { url } from "../utils.js";

const contactPage = {
    generate: () =>{

        //A l'ouverture de la page, réception du token de google
        grecaptcha.ready(function() {
            grecaptcha.execute('6LepuxohAAAAAChJ_a-bx9KO4nqIfEw8iCt5Jk3y', {action: 'message'}).then(function(token) {
                let main = document.getElementById('main-conteneur');
                const conteneurName = document.getElementById('conteneurName');

                const headers = new Headers();
                headers.append('Content-Type', 'application/json');
                const Init = {
                    method: "POST",
                    mode: "cors",
                    cache: "default",
                }
        
                fetch(url+"recaptcha/"+token, Init)
                .then((res) => {
                    return res.json();
                })
                .then((data) =>{
                    if(data.success){
                        main.innerHTML = `
                        <div class="conteneurContact backGroundFleur" >
                            <form id="contactForm" name="contactForm" method="post" action="message">
                                <h2>Contactez-moi !</h2>
                                <div class="containerForm">
                                    <div>
                                        <!--<label for="prenom">Prénom</label>-->
                                        <input type="text" name="prenom" id="prenom" placeholder="Votre prénom" class="firstInput" required>
                    
                                        <!--<label for="nom">Nom</label>-->
                                        <input type="text" name="nom" id="nom" placeholder="Votre nom" class="firstInput" required>
                                    </div>
                                    <!--<label for="sujet">Sujet</label>-->
                                    <input type="text" name="sujet" id="sujet" placeholder="Sujet du message" required>
                    
                                    <!--<label for="email">Email</label>-->
                                    <input type="email" name="email" placeholder="Votre email" id="email" required>
                                    
                                    <!--<label for="body">Message</label>-->
                                        <textarea placeholder = "Indiquez-moi votre message" id="body" name = "body" required></textarea>
                                        <input type="hidden"   name="recaptcha" id="recaptcha" value="${token}">
                                    <div class="divRGPD">
                                            <input required type="checkbox" name="rgpd" id="rgpd" >
                                            <label for="rgpd">J'autorise ce site à conserver mes données personnelles transmises via ce formulaire. Aucune exploitation commerciale ne sera faite des données conservées</label>
                                    </div>
                                        <button class="background" id="contactBtn" type="submit" >Envoyer</button>
                                </div>
                                <span id="message"></span>
                            </form>
                        </div>
                        `
                        contact();
                        conteneurName.style.position = "relative";
                    } else{

                        main.innerHTML = `
                        <div class="conteneurContact backGroundFleur" >
                            <p>Erreur de  captcha</p>
                        </div>
                        `
                    }

                })
                .catch((err) => {
                    console.log(err);
                })
        
            })
        })
    }
}
export default contactPage;