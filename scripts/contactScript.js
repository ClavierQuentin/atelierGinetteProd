/**Script pour l'envoie du formulaire */

//On récupère l'URI
import { url } from "../utils.js";

const contact = () => {
   
    //On récupère l'élément FORM au submit
    document.getElementById('contactForm').addEventListener('submit', (e) => {   
        
        //On récupère l'élément HTML 
        let message = document.getElementById('message');  

        //On empêche le refresh de la page
        e.preventDefault(); 

        //On stocke les valeurs de chaque input
        let data = {
                'prenom': document.getElementById('prenom').value,
                'nom': document.getElementById('nom').value,
                'sujet': document.getElementById('sujet').value,
                'email': document.getElementById('email').value,
                'message': document.getElementById('body').value,
                'token': document.getElementById('recaptcha').value,
                'pot':document.getElementById('pot').value     
        }

        //Création de la requête Fetch

        //Instance de l'entête
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('method', 'POST');
        headers.append('mode', 'cors');
        headers.append('cache', 'default');

        fetch(url + 'message', {
            headers: headers,
            body: JSON.stringify(data)
        })
        .then((res)=>{
            return res.json;
        })
        .then((res) => {
            //On retourne le message fourni par le serveur
            message.innerHTML = res.message;
        })
        .catch((err) => {
            console.log(err);
            message.innerHTML = "Une erreur est survenue";
        })

    });
}


export { contact };