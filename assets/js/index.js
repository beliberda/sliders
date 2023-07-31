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
console.log(massSlides);

for (let i = 0; i < massSlides.length-1; i++) {
    paginateList.insertAdjacentHTML('beforeend','<input type="radio" name="slider" class="radioBtn" />')
}

let radioMass = document.querySelectorAll('.radioBtn')

radioMass.forEach((element,i) => {
    element.addEventListener('click',()=>{
        massSlides[i].classList.add('slide--active')
        swiper.insertAdjacentElement('beforeend', massSlides[i])
        // swiper.firstElementChild.classList.add('slide--active')
        setTimeout(() => {
            swiper.firstElementChild.style.right = '-100vw'
            swiper.firstElementChild.remove()
            
        }, 2000);
        // console.log();
        let Timer = setInterval(() => {
            // Проверяем, сколько времени осталось
            let TimePassed = Date.now() - start
            if (TimePassed == 2) {
                console.log('out');
                clearInterval(Timer)
                return
            }
            Slide(i)
        }, 1); 
    })

});

// запоминаем время старта
let start = Date.now()

function Slide(i) {
    
    if (massSlides[i].style.right == '0px') {
        return
    }
    massSlides[i].style.right = massSlides[i].style.right + 1 + 'px'
}