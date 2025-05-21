// // ctrl+z undo
// // two method -> to and from
// gsap.to('#box' , {
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:90,
//     backgroundColor:"pink",
//     yoyo:true,
//     // repeat : -1
// })
// gsap.from("#box2" , {
//     x:250,
//     y:1000,
//     duration:2,
//     delay:1,
//     rotate:50,
//     backgroundColor:"Black",
//     yoyo:true,
//     repeat:-1


// })

gsap.to("#box" , {
    x:100,
    duraction:3,
    delay:1,
    backgroundColor: "red",
    yoyo:true,
    repeat:-1

})

gsap.to("#box2" , {
    y:100,
    duraction:3,
    delay:2,
    backgroundColor: "red",
    yoyo:true,
    repeat:-1

})

gsap.to("#box3" , {
    x:100,
    y:50,
    duraction:3,
    delay:1,
    backgroundColor: "black",
    yoyo:true,
    repeat:-1

})

gsap.to("#box4" , {
    x:-100,
    y:100,
    duraction:3,
    delay:1,
    backgroundColor: "black",
    yoyo:true,
    repeat:-1

})

