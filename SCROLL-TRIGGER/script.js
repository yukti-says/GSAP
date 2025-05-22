// gsap.from("#page1 #box" , {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:300

// })

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


// gsap.from("#page3 #box" , {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:300

// })

// gsap.to("#page2 h1", {
//     opacity: 0,
//     scale: 3,
//     duration: 2,
//     x: 10,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scoller: "body",
//         markers:true,
//         start:"top 60%"
//     }
    
// })


// gsap.from("#page2 h2", {
//     opacity: 0,
//     scale: 3,
//     duration: 2,
//     x: 20,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scoller: "body",
//         markers:true,
//         start:"top 60%"
//     }
    
// })

// completely animation on scroll ->scrub : two ways 1 to 5 or true,false
// gsap.from("#page2 #box", {
//     opacity: 0,
//     scale: 0,
//     duration: 1,
//     rotate: 720,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         // scrub:true
//         scrub:2
//     }
    
    
// })

// pin in scrolltrigger

gsap.to("#page2 h1 ", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        // jab bhi pin name ki property to uske parent ko trigger karna h 
        trigger: "#page2",
        scoller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",//pura scroll hoke top 0% pe jayega page2 tab ye trigger hoga and then animation will work
        scrub:2,
        pin: true
        
        
    }
})