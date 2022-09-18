import { login } from "../scripts/loginScript.js";

const loginPage = {
    generate : () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        main.innerHTML = `
        <div class="backGroundFleur divRegister">
        <form id="loginForm" method="post" action="register">
            <div>
            <h3>Se connecter :</h3>
                <div class="divInput">
                    <input type="email" placeholder="Email" name="email" id="email" required>
                    <input type="password" placeholder="Mot de passe" name="password" id="password" required>
                  <!--  <input type="hidden"   name="recaptcha" id="recaptcha" value="" id="recapcha">-->
                </div>
            </div>
            <div class="divBtn">
                <button class="btn" id = "loginBtn" type="submit">Se connecter</button>
            </div>
            <span id="success"></span>
        </form>
    </div>
    
        `
        conteneurName.style.position = "relative";
        login();
    }
}

export default loginPage;