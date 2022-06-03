/* eslint-disable no-undef */
//Mettre le code JavaScript lié à la page photographer.html 

let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId');
let photographCreations = document.querySelector(".photograph-creations");
let photographDetails = document.querySelector(".photograph-details");
// eslint-disable-next-line no-unused-vars
let modal = document.getElementById("contact_modal");
let likes = 0;


async function fetchData(){
    const res = await fetch('data/photographers.json')
    return await res.json()
}
async function getPhotographerById(id,photographers) {
    return photographers.find(photographer => photographer.id == id)
}


async function getMediasByPhotographerId(id,medias){
    return medias.filter(media => media.photographerId == id)
}


async function displayData(photographer,medias,filter){
    displayHeader(photographer)
    displayMedias(medias,photographer.name,filter)
    displayPhotographDetails(photographer.price)
}

function displayHeader (photographer){
    const title = document.getElementById("photograph-header-title")
    const location = document.getElementById("photograph-header-location")
    const tagline = document.getElementById("photograph-header-tagline")
    const profil_img = document.getElementById("photograph-header-img")
    const contact = document.getElementById("contact-name")
    contact.innerHTML = `Contactez-moi <br> ${photographer.name}`
    title.textContent = photographer.name
    location.textContent = `${photographer.city}, ${photographer.country}`;
    tagline.textContent = photographer.tagline
    profil_img.src = `assets/photographers/${photographer.portrait}`;
    profil_img.alt = photographer.name
}

function displayMedias(medias,photographerName,filter) {

    if (filter === 'Date') medias.sort((a, b) => ( Date.parse(b.date) - Date.parse(a.date)));
    else if (filter === 'Titre') medias.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    else medias.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));


    medias.forEach(media => {
        const mediaModel = new photographerMediaFactory(media.video ? 'video': 'image' ,media,photographerName)
        const mediaCardDOM = mediaModel.getMediaCardDOM()
        photographCreations.appendChild(mediaCardDOM)
        likes+= mediaModel.likes
    }
    )
}

// display photographers details in right bottom
function displayPhotographDetails(price) {
    const likeDetails = document.createElement('div')
    likeDetails.classList.add('like-details')
    const totalLikes = document.createElement('span')
    const heart = document.createElement('img')
    heart.setAttribute('alt','likes')
    const pricing = document.createElement('span')
    pricing.textContent = `${price}€/jour`
    heart.setAttribute('src','assets/icons/black-heart.png')
    totalLikes.textContent = likes
    likeDetails.appendChild(totalLikes)
    likeDetails.appendChild(heart)
    photographDetails.appendChild(likeDetails)
    photographDetails.appendChild(pricing)
}


async function init(filter) {
    let data = await fetchData()
    const photographer = await getPhotographerById(photographerId,data.photographers)
    const medias = await getMediasByPhotographerId(photographerId,data.media)
    displayData( photographer,medias,filter )
    enableHeart()
    initLightbox()
}

init()