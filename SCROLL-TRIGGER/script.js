gsap.from("#page1 #box" , {
    scale:0,
    delay:1,
    duration:2,
    rotate:300

})

// gsap.from("#page2 #box" , {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:300,
//     // scrollTrigger : "#page2 #box"
//     // scrollTrigger specific properties into its object
//     scrollTrigger:{
//         trigger :"#page2 #box",  //which element you are going to trigger starting point
//         scroller : "body",
//         markers: true,
//         start:"top 50%"


//     }


// })


gsap.from("#page3 #box" , {
    scale:0,
    delay:1,
    duration:2,
    rotate:300

})

gsap.to("#page2 h1", {
    opacity: 0,
    scale: 3,
    duration: 2,
    x: 10,
    scrollTrigger: {
        trigger: "#page2 h1",
        scoller: "body",
        markers:true,
        start:"top 60%"
    }
    
})


gsap.from("#page2 h2", {
    opacity: 0,
    scale: 3,
    duration: 2,
    x: 20,
    scrollTrigger: {
        trigger: "#page2 h2",
        scoller: "body",
        markers:true,
        start:"top 60%"
    }
    
})
