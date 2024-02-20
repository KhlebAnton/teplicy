const mainImgs = document.querySelectorAll('.main_img');
const containerMain = document.querySelector('.container-main')
let activeMainImg;



let timerBgrImage = setInterval(() => {
    nextBackgroundMain();
}, 7000);

 function nextBackgroundMain() {
    mainImgs.forEach(el => {
        if(!el.classList.contains('hidden')) {
            activeMainImg = el;
        }
    })
    activeMainImg.classList.add('hidden')
    if(activeMainImg != containerMain.lastElementChild) {
        activeMainImg.nextElementSibling.classList.remove('hidden')
    } else {
        containerMain.firstElementChild.classList.remove('hidden')
    }
    
 }






