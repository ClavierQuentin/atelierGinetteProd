/**Page d'affichage d'erreur 404
 * S'affiche dans le cas une erreur survient lors de la requête ou qu'aucune donnée ne soit disponible
 */
const page404 = {
    generate : () => {
        
        //On récupère le conteneur principal
        let main = document.getElementById('main-conteneur');

        main.innerHTML = `
                <div class="backGroundFleur">
                    <div class = "container404">
                        <h2>
                            404 Not Found
                        </h2>
                        <p>
                            Il semblerait qu'une erreur ce soit produite ou qu'aucun contenu ne soit disponible.
                        </p>
                        <a class="background" href="#">Revenir à l'accueil</a>
                    </div>
                </div>
                `    
    }
}

export default page404;