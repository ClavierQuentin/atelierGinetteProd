import { contact } from "../scripts/contactScript.js";

const contactPage = {
    generate: () =>{
        grecaptcha.ready(function() {
            grecaptcha.execute('6LepuxohAAAAAChJ_a-bx9KO4nqIfEw8iCt5Jk3y', {action: 'message'}).then(function(token) {
                // Add your logic to submit to your backend server here.
               // document.cookie = "token=" + token;
               // let cookieValue = document.cookie.split(';')[0].split('=')[1];
                let main = document.getElementById('main-conteneur');
                const conteneurName = document.getElementById('conteneurName');
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
                                <label for="rgpd">J'autorise ce site à conserver mes données personnelles transmises via ce formulaire. Aucune exploitation commerciale ne sera faite des données conservée.s</label>
                        </div>
                            <button id="contactBtn" type="submit" >Envoyer</button>
                    </div>
                    <span id="message"></span>
                </form>
                </div>
                `
                contact();
                conteneurName.style.position = "relative";      
            })
        })
    }
}
export default contactPage;