const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return{
        page: request[1],
        destination: request[2],
        id: request[3]
    } ;
}

const url = "https://api-atelier-dev-dashboard.herokuapp.com/api/";

export { parseRequestUrl, url };