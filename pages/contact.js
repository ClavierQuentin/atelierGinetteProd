import { contact } from "../scripts/contactScript.js";

const contactPage = {
    generate: () =>{
        let cookieValue = document.cookie.split(';')[0].split('=')[1];
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        main.innerHTML = `
        <div class="conteneurContact backGroundFleur" >
        <form id="contactForm" name="contactForm" method="post" action="message">
            <h2>Contactez-moi !</h2>
            <div class="containerForm">
                <div>
                    <label for="prenom">Prénom</label>
                    <input type="text" name="prenom" id="prenom" placeholder="Votre prénom">

                    <label for="nom">Nom</label>
                    <input type="text" name="nom" id="nom" placeholder="Votre nom">
                </div>
                <label for="sujet">Sujet</label>
                <input type="text" name="sujet" id="sujet" placeholder="Sujet du message">

                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Votre email" id="email">
                
                <label for="body">Message</label>
                    <textarea placeholder = "Indiquez-moi votre message" id="body" name = "body"></textarea>
                    <input type="hidden"   name="recaptcha" id="recaptcha" value="${cookieValue}">
                <div class="divRGPD">
                        <input required type="checkbox" name="rgpd" id="rgpd" >
                        <label for="rgpd">J'autorise ce site à conserver mes données personnelles transmises via ce formulaire. Aucune exploitation commerciale ne sera faite des données conservée.</label>
                </div>
                    <button id="contactBtn" type="submit" >Envoyer</button>
            </div>
            <span id="message"></span>
        </form>
        </div>

        `
        contact();
        conteneurName.style.position = "relative";
        
    }
}
export default contactPage;