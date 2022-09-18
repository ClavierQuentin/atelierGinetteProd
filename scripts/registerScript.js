const register = () => {
    document.getElementById("registerForm").addEventListener('submit', (e) => {
        e.preventDefault();
            let data = {
                nom: document.getElementById("nom").value,
                prenom: document.getElementById("prenom").value,
                email: document.getElementById("email").value,
                username: document.getElementById("email").value,
                password: document.getElementById("password").value,
                //'recaptcha': document.getElementById('recaptcha').value
        }
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const Init = {
            method: "POST",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(data)
        }

        fetch('http://localhost:1337/api/auth/local/register',Init)
        .then(response => {
            if(response.status == 200){
                document.getElementById("success").innerHTML = "Votre compte a bien été créée"
            }
            return response.json()       
        })
        .then(res => {
            console.log(res.error.message);
            if(res.error.message == "Email or Username are already taken"){
                document.getElementById("success").innerHTML = "Utilisateur déjà existant"
            }
            if(res.error.message == "password must be at least 6 characters"){
                document.getElementById("success").innerHTML = "Votre mot de passe doit faire au moins 6 caractères"
            }
            
        })
        .catch(error => {
            console.log('An error occurred:', error);
        })

    })
};

export { register }