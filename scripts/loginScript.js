const login = () => {
    document.getElementById("loginForm").addEventListener('submit', (e) => {
        e.preventDefault();
            let data = {
                identifier: document.getElementById("email").value,
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

        fetch('http://localhost:1337/api/auth/local',Init)
        .then(response => {
            console.log(response);
            return response.json()       
        })
        .then(res => {
            console.log(res);
            
        })
        .catch(error => {
            console.log('An error occurred:', error);
        })

    })
};

export { login }