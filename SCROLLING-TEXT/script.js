function breakTheText() {

    var h1 = document.querySelector("h1"); //whole html selected here
    // breaking the text into words 
    var h1Text = h1.textContent;  //Only content of h1

    var splittedText = h1Text.split('')  //splitted text based on text only
    console.log(splittedText)

    //looping the array splittedText forEach
    //in forEach loop whatever i have written will be run jitne array me elements ho


    var clutter = ""
    var halfValue = Math.floor(splittedText.length/2);

    splittedText.forEach(function (e , idx) {
        if (idx < halfValue) {
            clutter = clutter + `<span class='a' >${e}</span>`
        }
        else {
            clutter = clutter + `<span class='b' >${e}</span>`
            }
    })

    //idx tells the index of the element in the array


    h1.innerHTML = clutter; //innerHTML is used to set the content of h1
    //h1.innerHTML = h1Text; //this will set the content of h1 to the original text

    // console.log(h1)
}

breakTheText()

//  Normal Animation
// gsap.from("h1 span", {
//     y: 50,
//     opacity:0,
//     duration:0.8,
//     delay: 0.5,
//     stagger: 0.15,
//     // stagger:-0.15 reverse order m

gsap.from("h1 .a", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity:0
})

gsap.from("h1 .b", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity:0
})