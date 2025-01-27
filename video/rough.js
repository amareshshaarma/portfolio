function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
    lerp: 0.07
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

gsap.to(".sticker", {
    rotation: 360,         // Full rotation
    duration: 5,           // Time for one rotation (in seconds)
    repeat: -1,            // Infinite loop
    ease: "linear",        // Smooth constant speed
    background: "linear-gradient(219deg, rgba(157,78,221,1) 8%, rgba(255,255,255,1) 100%)", // Swap the colors
    yoyo: true,            // Reverses the animation back and forth
    backgroundPosition: "100%", // Animate the background position
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();


function menu() {
    let flag = 0;
    const close = document.querySelector(".ri-close-line");
    const menuPage = document.querySelector(".menus");
    const menu = document.querySelector("nav .menu");

    // // Set initial position of the menuPage off-screen
    // gsap.set(menuPage, { left: "-100%" });

    menu.addEventListener('click', () => {
        console.log(flag);
        if (flag == 0) {
            // Use GSAP to animate the menuPage sliding in
            gsap.to(menuPage, { 
                duration: 1.5,
                left: "0%", 
                ease: "elastic.out(1,0.6)",
            });
            flag = 1;
        }
    });

    close.addEventListener('click', () => {
        console.log(flag);
        if (flag == 1) {
            // Use GSAP to animate the menuPage sliding out
            gsap.to(menuPage, { 
                duration: 1.5, 
                left: "-100%", 
                ease: "elastic.out(1,0.6)",
            });
            flag = 0;
        }
    });
}

menu();


function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

circleMouseFollower();


var button = document.querySelector("button");
var text = document.querySelector("h1");
var flag = 0;
button.addEventListener("click",()=>{
    if(flag == 0){
        gsap.to(text, { 
            duration: 2.5,
            color: "red",
            ease: "elastic.out(1,0.6)",
        });
        flag = 1;
    }
    else{
        gsap.to(text, { 
            duration: 2.5,
            color: "black",
            ease: "elastic.out(1,0.6)",
        });
        flag = 0;
    };
    
})


var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30, // Default space between slides
    navigation: {
        nextEl: ".swiper-button-next", // Right arrow
        prevEl: ".swiper-button-prev", // Left arrow
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // For small screens (up to 600px)
        0: {
            slidesPerView: 1, // Show 1 slide per view
            spaceBetween: 10, // Reduced space between slides
        },
        // For medium screens (up to 768px)
        600: {
            slidesPerView: 2, // Show 2 slides per view
            spaceBetween: 20, // Medium spacing
        },
        // For large screens (up to 1024px)
        768: {
            slidesPerView: 3, // Show 3 slides per view
            spaceBetween: 30, // Default spacing
        },
        // // For extra-large screens (above 1024px)
        // 1024: {
        //     slidesPerView: 4, // Show 4 slides per view
        //     spaceBetween: 40, // Increased spacing
        // },
    },
});


var swiper = new Swiper(".mySwiper-1", {
    loop: true,
    spaceBetween: 30, // Default space between slides
    navigation: {
        nextEl: ".swiper-button-next", // Right arrow
        prevEl: ".swiper-button-prev", // Left arrow
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // For small screens (up to 600px)
        0: {
            slidesPerView: 1, // Show 1 slide per view
            spaceBetween: 10, // Reduced space between slides
        },
        // For medium screens (up to 768px)
        600: {
            slidesPerView: 1, // Show 2 slides per view
            spaceBetween: 20, // Medium spacing
        },
        // For large screens (up to 1024px)
        768: {
            slidesPerView: 2, // Show 3 slides per view
            spaceBetween: 30, // Default spacing
        },
        // // For extra-large screens (above 1024px)
        // 1024: {
        //     slidesPerView: 4, // Show 4 slides per view
        //     spaceBetween: 40, // Increased spacing
        // },
    },
});


var t1 = gsap.timeline();

t1.from("nav",{
    y: -30,
    duration: 1.5,
    opacity: 0
})
t1.from(".page1 h1",{
    y: -30,
    duration: 1.5,
    delay: -1,
    opacity: 0
})
t1.from(".page1 button",{
    y: 30,
    duration: 1.5,
    delay: -1,
    opacity: 0
})

gsap.from(".page2-contnet h1",{
    y: "40%",
    duration: 3,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".page2-contnet",
        scroller: "main",
        color: "#red",
        scrub:2,
        start: "top 160%",
    }
})

var t2 = gsap.timeline();


gsap.from(".Footer .content",{
    y: "-30%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".Footer",
        scroller: "main",
        scrub:2,
        start: "top 150%",
    }
})
gsap.from(".Footer .foot",{
    y: "-200%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger:{
        trigger: ".Footer",
        scroller: "main",
        scrub:2,
        start: "top 150%",
    }
})



