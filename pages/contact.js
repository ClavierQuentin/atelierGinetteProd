import { contact } from "../scripts/contactScript.js";

const contactPage = {
    generate: () =>{
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        main.innerHTML = `
        <form class="conteneurContact backGroundFleur" id="contactForm" name="contactForm" method="post">
            <h2>Contactez-moi !</h2>
            <div>
                <div>
                    <input type="text" name="prenom" id="prenom" placeholder="Votre prénom">
                    <input type="text" name="nom" id="nom" placeholder="Votre nom">
                </div>
                <div>
                    <input type="text" name="sujet" id="sujet" placeholder="Sujet du mail">
                    <input type="email" name="email" placeholder="Votre email" id="email">
                </div>
                <div class="submit-div">
                    <textarea placeholder = "Indiquez-moi votre message" id="body" name = "body"></textarea>
                    <input type="hidden"   name="recaptcha" id="recaptcha">
                    <button id="contactBtn" type="submit" >Envoyer</button>
                </div>
            </div>
        </form>

        `
        contact();
        conteneurName.style.position = "relative";
        
    }
}
export default contactPage;