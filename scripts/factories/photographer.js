/* eslint-disable no-unused-vars */
class photographerFactory {
    constructor(type, data){
        switch(type){
            case 'photographer':
                return new Photographer(data)
            default:
                throw 'Unknown type format'
        }
    }
}
function Photographer(data) {
    const { name, portrait, tagline, country, city, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'h3' );
        location.textContent = city+', '+country;
        const subtext = document.createElement( 'h4' );
        subtext.textContent = tagline;
        const pricing = document.createElement( 'small' );
        pricing.textContent = price+'€/jour';
        const imgAndH2 = document.createElement( 'a' );
        imgAndH2.href = 'photographer.html?photographerId='+ id;
        img.setAttribute('alt', name);
        imgAndH2.appendChild(img);
        imgAndH2.appendChild(h2);
        article.appendChild(imgAndH2);
        article.appendChild(location);
        article.appendChild(subtext);
        article.appendChild(pricing);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}