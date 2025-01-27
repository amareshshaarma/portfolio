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

const baseSwiperSettings = {
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        600: { slidesPerView: 1, spaceBetween: 20 },
    },
};

const swiper1 = new Swiper(".mySwiper", Object.assign({}, baseSwiperSettings, {
    breakpoints: {
        ...baseSwiperSettings.breakpoints,
        768: { slidesPerView: 3, spaceBetween: 30 },
    },
}));

const swiper2 = new Swiper(".mySwiper-1", Object.assign({}, baseSwiperSettings, {
    breakpoints: {
        ...baseSwiperSettings.breakpoints,
        768: { slidesPerView: 2, spaceBetween: 30 },
    },
}));

// Common function to disable/enable swiper scrolling for videos
const handleVideoInteractions = (swiper) => {
    const videos = swiper.el.querySelectorAll("video");

    videos.forEach((video) => {
        video.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768) {
                swiper.allowSlideNext = false;
                swiper.allowSlidePrev = false;
            }
        });

        video.addEventListener("mouseleave", () => {
            if (window.innerWidth > 768) {
                swiper.allowSlideNext = true;
                swiper.allowSlidePrev = true;
            }
        });
    });
};

// Apply video interaction handling for both sliders
handleVideoInteractions(swiper1);
handleVideoInteractions(swiper2);

// Reapply interaction handling on window resize
window.addEventListener("resize", () => {
    handleVideoInteractions(swiper1);
    handleVideoInteractions(swiper2);
});

// Manage video playback across both sliders
let currentPlayingVideo = null; // To keep track of the currently playing video

const manageVideoPlayback = () => {
    // Get all video elements across both sliders
    const videos = document.querySelectorAll(".swiper-slide video");

    videos.forEach((video) => {
        video.addEventListener("play", () => {
            // Pause the currently playing video if it's not the same as the new one
            if (currentPlayingVideo && currentPlayingVideo !== video) {
                currentPlayingVideo.pause();
                currentPlayingVideo.muted = true; // Mute the previous video
            }

            // Set the current video as the playing one and unmute it
            currentPlayingVideo = video;
            video.muted = false;
        });

        video.addEventListener("pause", () => {
            // Optionally mute the video when it's paused
            video.muted = true;
        });

        video.addEventListener("ended", () => {
            // Mute the video when it ends
            video.muted = true;
            currentPlayingVideo = null; // Reset the current playing video
        });
    });
};

// Apply playback management across both sliders
manageVideoPlayback();

// Reapply playback management on window resize to ensure responsiveness
window.addEventListener("resize", manageVideoPlayback);





const t1 = gsap.timeline();

t1.from("nav", { y: -30, duration: 1.5, opacity: 0 });
t1.from(".page1 h1", { y: -30, duration: 1.5, opacity: 0 });
t1.from(".page1 button", { y: 30, duration: 1.5, delay: -1, opacity: 0 });

gsap.from(".p2-content h1", {
    y: "40%",
    duration: 3,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".page2-contnet",
        scroller: "main",
        scrub: 2,
        start: "top 160%"
    }
});

gsap.from(".p3-content h1", {
    y: "40%",
    duration: 3,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".p3-content",
        scroller: "main",
        scrub: 2,
        start: "top 160%"
    }
});

gsap.from(".p3-content .caption", {
    y: "70%",
    duration: 3,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".caption",
        scroller: "main",
        scrub: 2,
        start: "top 160%"
    }
});

gsap.from(".Footer", {
    backgroudColor: "#dddddd",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".Footer",
        scroller: "main",
        scrub: 2,
        start: "top 180%"
    }
});
gsap.from(".Footer .content", {
    y: "-30%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".Footer",
        scroller: "main",
        scrub: 2,
        start: "top 150%"
    }
});

gsap.from(".Footer .foot", {
    y: "-200%",
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".Footer",
        scroller: "main",
        scrub: 2,
        start: "top 150%"
    }
});
