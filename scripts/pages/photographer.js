//Mettre le code JavaScript lié à la page photographer.html 

let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId');
let photographCreations = document.querySelector(".photograph-creations");


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


async function displayData(photographer,medias){
    displayHeader(photographer)
    displayMedias(medias,photographer.name)
}

function displayHeader (photographer){
    const title = document.getElementById("photograph-header-title")
    const location = document.getElementById("photograph-header-location")
    const tagline = document.getElementById("photograph-header-tagline")
    const profil_img = document.getElementById("photograph-header-img")
    title.textContent = photographer.name
    location.textContent = `${photographer.city}, ${photographer.country}`;
    tagline.textContent = photographer.tagline
    profil_img.src = `assets/photographers/${photographer.portrait}`;
    profil_img.alt = photographer.name
}

function displayMedias(medias,photographerName) {
    likes=0
    medias.map(media => {
        const mediaModel = new photographerMediaFactory(media.video ? 'video': 'image' ,media,photographerName)
        const mediaCardDOM = mediaModel.getMediaCardDOM()
        console.log(photographCreations)
        photographCreations.appendChild(mediaCardDOM)
        likes+= mediaModel.likes
    }
    )
}


async function init() {
    let data = await fetchData()
    const photographer = await getPhotographerById(photographerId,data.photographers)
    const medias = await getMediasByPhotographerId(photographerId,data.media)
    displayData( photographer,medias )
}

init()