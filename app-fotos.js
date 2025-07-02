const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnail')
const main_img1 = document.querySelector('.main_img1')
const main_img2 = document.querySelector('.main_img2')
const main_img3 = document.querySelector('.main_img3')

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
        main_img.src = this.src
        main_img1.src = this.src
        main_img2.src = this.src
        main_img3.src = this.src
    })
})
