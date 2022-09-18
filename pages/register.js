import { register } from "../scripts/registerScript.js";

const registerPage = {
    generate : () => {
       // grecaptcha.ready(function() {
           // grecaptcha.execute('6LepuxohAAAAAChJ_a-bx9KO4nqIfEw8iCt5Jk3y', {action: 'register'}).then(function(token) {

                let main = document.getElementById('main-conteneur');
                const conteneurName = document.getElementById('conteneurName');
                main.innerHTML = `
                    <div class="backGroundFleur divRegister">
                        <form id="registerForm" method="post" action="register">
                            <h3>Créer un compte :</h3>
                            <div>
                                <div class="divInput">
                                    <input type="text" placeholder="Prénom" name="prenom" id="prenom" required>
                                    <input type="text" placeholder="Nom" name="nom" id="nom" required>
                                </div>
                                <div class="divInput">
                                    <input type="email" placeholder="Email" name="email" id="email" required>
                                    <input type="password" placeholder="Mot de passe" name="password" id="password" required>
                                  <!--  <input type="hidden"   name="recaptcha" id="recaptcha" value="" id="recapcha">-->
                                </div>
                            </div>
                            <div class="divBtn">
                                <button class="btn" id = "registerBtn" type="submit">S'inscrire</button>
                                <div>
                                    <a href="#">Retour à l'accueil</a>
                                </div>
                            </div>
                            <span id="success"></span>
                        </form>
                        
                    </div>
                `
                conteneurName.style.position = "relative";
                register();
            //})
       // })
    }
}

export default registerPage;