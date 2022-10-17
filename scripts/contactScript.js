import { url } from "../utils.js";

const contact = () => {
   
    document.getElementById('contactForm').addEventListener('submit', (e) => {     
        let message = document.getElementById('message');  
        e.preventDefault(); 
        let data = {
            
                'prenom': document.getElementById('prenom').value,
                'nom': document.getElementById('nom').value,
                'sujet': document.getElementById('sujet').value,
                'email': document.getElementById('email').value,
                'message': document.getElementById('body').value,
                // 'recaptcha': document.getElementById('recaptcha').value
            
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
        fetch(url + 'message', Init)
        .then((res) => {
            if(res.status === 200){
                message.innerHTML = "Votre message a bien été envoyé";
            }
        })
        .catch((err) => {
            console.log(err);
        })

    });
}

export { contact };