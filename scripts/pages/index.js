    async function getPhotographers() {
        const res = await fetch('data/photographers.json')
        const json = await res.json()
        const photographers = await json.photographers
        return ({
            photographers: photographers})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = new photographerFactory("photographer",photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        console.log("c'est moi")
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    