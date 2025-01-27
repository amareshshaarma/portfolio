function init() {
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
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    gsap.to(".sticker", {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
        yoyo: true,
        backgroundPosition: "100%"
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

    menu.addEventListener("click", () => {
        if (flag === 0) {
            gsap.to(menuPage, {
                duration: 1.5,
                left: "0%",
                ease: "elastic.out(1, 0.6)"
            });
            flag = 1;
        }
    });

    close.addEventListener("click", () => {
        if (flag === 1) {
            gsap.to(menuPage, {
                duration: 1.5,
                left: "-100%",
                ease: "elastic.out(1, 0.6)"
            });
            flag = 0;
        }
    });
}

menu();



function circleMouseFollower() {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

circleMouseFollower();

const tl = gsap.timeline();

tl.from(".btm-heading", {
    y: "40%",
    duration: 4,
    opacity: 0,
    scale: 2,
    ease: Expo.easeInOut,
},"tg");
tl.from(".sec", {
    y: "40%",
    duration: 4,
    opacity: 0,
    ease: Expo.easeInOut,
},"tg");

tl.from(".section-1", {
    y: "40%",
    duration: 4,
    opacity: 0,
    ease: Expo.easeInOut,
},"tg");

tl.from(".circle", {
    y: "30%",
    duration: 5,
    opacity: 0,
    delay: -2,
    scale: 3,
    ease: Expo.easeInOut,
});