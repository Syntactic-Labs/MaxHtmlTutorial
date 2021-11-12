const baseurl = "http://localhost:60186/api/";
const getUrlId = () => {
    let url = window.location.href;
    let parts = url.split("?");
    let kvpair = parts[1].split("=");
    return +kvpair[1];
}