function pageone() {
    var tl = gsap.timeline()


tl.from("nav h1 , nav h4 , nav button", {
    y: -40,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    stagger:0.15
})

tl.from(".center-part1 h1 ", {
    x: -200,
    opacity: 0,
    duration:0.5
},"-=0.3")


tl.from(".center-part1 p ", {
    x: -100,
    opacity: 0,
    duration:0.4
})

tl.from(".center-part1 button", {
    opacity: 0,
    duration:0.4
})

tl.from(".center-part2 img", {
    opacity: 0,
    duration:0.5
}, "-=0.5")

tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration:0.6
    
})


}

pageone();

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2 ,.container",
        scroller: "body",
        start: "top 50%",
        end:"top 0",
        scrub: 2,
        
    }
})


tl2.from(".services", {
    y:-30,
    opacity: 0,
    duration:0.5
    
})

tl2.from(".elem.line1.left", {
    opacity: 0,
    duration:1
})

tl2.from(".elem.line1.right", {
    opacity: 0,
    duration:1
})

tl2.from(".elem.line2.left", {
    opacity: 0,
    duration:1
})

tl2.from(".elem.line2.right", {
    opacity: 0,
    duration:1
})




var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3 ,.main",
        scroller: "body",
        start: "top 50%",
        end:"top 30%",
        scrub: 2,
        
    }
})

tl3.from(".main", {
    y: 300,
    opacity: 0,

    
})


var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3.1,",
        scroller: "body",
        start: "top 80%",
        end:"top 30%",
        scrub: 2,
        
    }
})

tl4.from(".all h2", {
    x: 30,
    opacity:0,
})

tl4.from(".all p", {
    x: -60,
    opacity:0
})

