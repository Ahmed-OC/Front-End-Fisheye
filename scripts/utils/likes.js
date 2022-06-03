/* eslint-disable no-undef */

// enable the increment and the decrement on a heart
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

        heart.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
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
            }
        })


    })
}
function eventHeart() {
    var hearts = document.querySelectorAll(".heart-img");
    hearts.forEach((heart) => {
        console.log('hahaha')
        heart.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
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
            }
        })
    })
}
enableHeart()
eventHeart()


