const contact = () => {
   
    document.getElementById('contactForm').addEventListener('submit', (e) => {       
        e.preventDefault(); 
        let data = {
            data : {
                'prenom': document.getElementById('prenom').value,
                'nom': document.getElementById('nom').value,
                'sujet': document.getElementById('sujet').value,
                'email': document.getElementById('email').value,
                'body': document.getElementById('body').value,
                'recaptcha': document.getElementById('recaptcha').value
            }
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
        fetch('http://localhost:1337/api/messages', Init)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })

    });
}

export { contact };