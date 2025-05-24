var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

var image = document.querySelector("#image")


main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease:"back.out"
    })
   
})

// dets value is dependent on events

image.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 2,
        backgroundColor:"red"
    })
})

image.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        scale: 1,
        backgroundColor:"white"
    })
})