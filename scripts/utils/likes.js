

function enableHeart ()
{
    var hearts = document.querySelectorAll(".heart-img");
    const totalLikes = document.querySelector('.photograph-details span')
    hearts.forEach((heart) => {
        heart.addEventListener('click',() => {
            if(heart.classList.contains("liked"))
            {
                heart.previousSibling.textContent--
                heart.classList.toggle("liked")
                totalLikes.textContent--
            }
            else
            {
                heart.classList.add("liked")
                heart.previousSibling.textContent++
                totalLikes.textContent++
            }     
        })
    })
}
enableHeart()


