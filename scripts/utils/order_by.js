/* eslint-disable no-undef */
const orderByButton = document.getElementById("order-by")
const secondaryFilterButtons = document.querySelectorAll(".order-by-buttons ul button")

secondaryFilterButtons.forEach(button => button.addEventListener('click', function(){secondaryButtonsClick(this)} ))
orderByButton.addEventListener('click',() => clickOrderBy())

// handle the display of the other filters
function clickOrderBy() {
  const notClickedList = document.querySelectorAll(".not-clicked")
  const clickedList = document.querySelectorAll(".clicked")
  for (let i = 0; i < notClickedList.length; ++i) {
    notClickedList[i].classList.remove('not-clicked');
    notClickedList[i].classList.add('clicked');
  }
 for (let i = 0; i < clickedList.length; ++i) {
  clickedList[i].classList.add('not-clicked');
  clickedList[i].classList.remove('clicked');
  }
}

// handle the click on a different filter
async function secondaryButtonsClick(e) {

  const actualButtonText = e.textContent
  const filter = document.querySelectorAll(".order-by-buttons button span")
  const actualFilterText = filter[0].textContent
  filter[0].textContent = actualButtonText
  e.textContent = actualFilterText
  clickOrderBy()
  photographCreations.innerHTML=''
  photographDetails.innerHTML=''
  likes = 0;
  init(actualButtonText)
  
}