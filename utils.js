const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return{
        page: request[1],
        destination: request[2],
        id: request[3]
    } ;
}

const getPanier = () => {
    const panier = sessionStorage.getItem("panier")? JSON.parse(sessionStorage.getItem("panier")) : [];
    return panier
}

const setPanier = (panier) => {
    sessionStorage.setItem('panier', JSON.stringify(panier));
}

const ajouterAuPanier = (item) =>{
    let panier = getPanier();
    if(panier.find(a => a.id == item.id)){
        document.getElementById("produitPresent").style.display="block";
        return false
    }
    panier = [...panier, item];
    setPanier(panier);
    location.reload();
}

export { parseRequestUrl, getPanier, setPanier, ajouterAuPanier };