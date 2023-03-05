const bar = document.getElementById('bar')
const nav = document.getElementById('nav-bar')
const close = document.getElementById('close')
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}
// javascript for singleproduct....

const singleImg = document.getElementById('main-img')
const smallImg = document.getElementsByClassName('small-img')

smallImg[0].onclick = function () {
  singleImg.src = smallImg[0].src
}
smallImg[1].onclick = function () {
  singleImg.src = smallImg[1].src
}
smallImg[2].onclick = function () {
  singleImg.src = smallImg[2].src
}
smallImg[3].onclick = function () {
  singleImg.src = smallImg[3].src
}
