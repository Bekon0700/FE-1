const carouselContainer = document.querySelector('.card-container')
const card = document.querySelector('.carousel-item')
const carouselIndicators = document.querySelector('.indicators')

const btnPrev = document.querySelector('.left-btn-container')
const btnNext = document.querySelector('.right-btn-container')

const indicators = [...carouselIndicators.children]

const cardWidth = card.clientWidth;

let i = 1
const maxIndicatorCount = Math.ceil(carouselContainer.childElementCount / 2) + 1

const moveIndicatorBtn = (index) => {
   const currActive = document.querySelector('.active')
   const targetActive = indicators[index-1]
   currActive.classList.remove('active')
   targetActive.classList.add('active')
}

btnNext.addEventListener('click', () => {
    if(i == maxIndicatorCount) return
    carouselContainer.scrollLeft += cardWidth + 30
    i++;
    moveIndicatorBtn(i)
})
btnPrev.addEventListener('click', () => {
    if(i == 1) return
    if(i == carouselContainer.childElementCount) i = 1;
    carouselContainer.scrollLeft -= cardWidth + 30
    i--;
    moveIndicatorBtn(i)
})


// const gapSize = window.getComputedStyle(carouselContainer).getPropertyValue('gap')
// console.log(gapSize)