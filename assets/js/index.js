let slides = document.querySelectorAll('.slide')
let swiper = document.querySelector('.swiper')
let paginateList = document.querySelector('.swiper-pagination')

let massSlides = []

slides.forEach((element,i) => {
    massSlides.push(element)
    if (i!=0) {
        element.remove()
    }
});
for (let i = 0; i < massSlides.length-1; i++) {
    paginateList.insertAdjacentHTML('beforeend','<input type="radio" name="slider" class="radioBtn" />')
}

let radioMass = document.querySelectorAll('.radioBtn')



function Slide(i) {
    
    if (massSlides[i].style.right == '1px') {
        massSlides[i].style.right = 0
        return
    }
    massSlides[i].style.right = massSlides[i].style.right + 1 + 'px'
}


radioMass.forEach((element,i) => {
    element.addEventListener('click',()=>{
        if ( massSlides[i] == swiper.firstElementChild) {
            return
        }
        swiper.insertAdjacentElement('beforeend', massSlides[i]).classList.add('slide--active')
        swiper.lastElementChild.style.right = null
        // запоминаем время старта
        let start = Date.now()
        let Timer = setInterval(() => {
            // Проверяем, сколько времени осталось
            let TimePassed = Date.now() - start
            if (TimePassed > 500) {
                clearInterval(Timer)

                swiper.firstElementChild.classList.remove('slide--active')
                swiper.firstElementChild.remove()
                return
            }
            Slide(i)
        }, 1); 
    })

});

