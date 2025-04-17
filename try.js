const slides = document.querySelectorAll(".slides")
const buttons = document.querySelectorAll(".buttons button")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")


console.log("All buttons", buttons)
// console.log("All", prev.classList)

let index = 0

const nextHandler = () => {
    slides.forEach(slide => {
        slide.style.marginLeft = "-100%"
        slide.classList.remove("active")
    })
           index++
        if(index >= slides.length -1) {
            index = 0
        }
        // slides.style.marginLeft = "0"
        slides[index].classList.add("active")
        slides.forEach(slide => {
            slide.style.marginLeft = "0"
        })

        console.log("Next index", index)
    }
    
    // document.addEventListener("DOMContentLoaded", ()=> {
        
        setInterval(nextHandler, 3000)
        // })
        
        
        next.addEventListener("click", ()=> {
            nextHandler();
        })
        prev.addEventListener("click", ()=> {
            slides.forEach(slide => {
        slide.classList.remove("active")
    })
           index--
           if(index < 0) {
            index = slides.length - 1
        }
        slides[index].classList.add("active")
        console.log("Prev index", index)

})


const cardBtt = document.querySelectorAll(".card-bottom")
const price = document.querySelectorAll(".price")
const cart = document.querySelectorAll(".cart")

console.log(price)
console.log(cart)

cardBtt.forEach((p, i) => {
    p.addEventListener("mouseenter", ()=> {
        price[i].style.display = "none";
        cart[i].style.display = "block";
    })
    p.addEventListener("mouseleave", ()=> {
        price[i].style.display = "block";
        cart[i].style.display = "none";
    })
})



let lastScrollTop = 0;
const container = document.querySelector("#why-buy .container")
const round1 = document.querySelector(".round-1")
const round2 = document.querySelector(".round-2")

console.log(container)
console.log(round1)
console.log(round2)
const currentScale = 1
container.addEventListener("scroll", ()=> {
    const currentScroll = container.scrollBy;

    if(currentScroll > lastScrollTop && currentScale > 0.8){
        currentScale -= 0.05
    }else if (currentScroll < lastScrollTop && currentScale < 1) {
        currentScale += 0.05

    }

    container.style.transform = `scale(${currentScale})`;
    round1.style.transform = `scale(${currentScale})`;
    round2.style.transform = `scale(${currentScale})`;
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
})




// Scrolling left and right 
const prevScrollBtn = document.querySelector(".scroll-btn .prev");
const nextScrollBtn = document.querySelector(".scroll-btn .next");
const productGroup = document.querySelector(".product-group");
const trackBalls = document.querySelectorAll(".ball");
const scrollAmount = productGroup.offsetWidth / 4;

console.log("All balls",trackBalls)



let indexTrack = 0;
const maxScrollLeft = productGroup.scrollWidth - productGroup.clientWidth;
const updateBtn = () => {
    

    prevScrollBtn.disabled = productGroup.scrollLeft <= 0;
    
    
}


nextScrollBtn.addEventListener("click", ()=>{
    //nextScrollBtn.disabled = (productGroup.scrollLeft >= maxScrollLeft);
    if(productGroup.scrollLeft >= maxScrollLeft /2){
        indexTrack++
        
        nextScrollBtn.style.display = "none"
    }else {
        indexTrack++
    }
    productGroup.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    })
    console.log("scroll amount", scrollAmount)

    
    
    trackBalls.forEach((ball, i) => {
            ball.classList.remove("active");
            trackBalls[indexTrack].classList.add("active")
        })

    
})



prevScrollBtn.addEventListener("click", ()=>{
    nextScrollBtn.style.display = "block"
    productGroup.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    })

    if(indexTrack === 0) {
        indexTrack = 0
    // prevScrollBtn.style.display = "none"

    }else {

        indexTrack--
    }
    trackBalls.forEach((ball, i) => {
            ball.classList.remove("active");
            trackBalls[indexTrack].classList.add("active")
        })
})

productGroup.addEventListener("scroll", updateBtn)


const menuBtn = document.querySelector(".menu")
const slideMenu = document.querySelector(".slider-menu")
const closeMenu = document.querySelector(".ri-close-large-fill")

menuBtn.addEventListener("click", ()=>{
    slideMenu.style.right = "0"
})

closeMenu.addEventListener("click", ()=>{
    slideMenu.style.right = "-700px"
})