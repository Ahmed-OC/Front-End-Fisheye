//Mettre le code JavaScript lié à la page photographer.html 

let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId');

async function fetchData(){
    const res = await fetch('data/photographers.json')
    const json = await res.json()
    return json
}
async function getPhotographerById(id,photographers) {
    var photographerData;
    photographers.forEach(photographer => {
        if (photographer.id == id) 
        {
            photographerData = photographer
        }
    });
    return photographerData
}

async function displayData(photographer){
    displayheader(photographer)
}

function displayheader (photographer){
    const title = document.getElementById("photograph-header-title")
    const location = document.getElementById("photograph-header-location")
    const tagline = document.getElementById("photograph-header-tagline")
    const profil_img = document.getElementById("photograph-header-img")
    title.textContent = photographer.name
    location.textContent = photographer.city+', '+photographer.country;
    tagline.textContent = photographer.tagline
    profil_img.src = `assets/photographers/${photographer.portrait}`;
    profil_img.alt = photographer.name
}



async function init() {
    console.log("igigi")
    let data = await fetchData()
    const photographer = await getPhotographerById(photographerId,data.photographers)
    displayData( photographer )
}

init()