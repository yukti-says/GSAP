function TextAnimation() {
  window.addEventListener("wheel", function (dets) {
    // console.log(dets.deltaY)
    // if (dets.deltaY < 0) {
    //     // Scrolling up
    //     document.body.style.backgroundColor = 'lightblue';
    // } else {
    //     // Scrolling down
    //     document.body.style.backgroundColor = 'lightcoral';
    // }

    if (dets.deltaY > 0) {
      // console.log("Scrolling down");

      gsap.to(".marque", {
        transform: "translateX(-200%)",
        duration: 5,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      // console.log("Scrolling up");

      gsap.to(".marque", {
        transform: "translateX(0%)",
        duration: 5,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}

TextAnimation();
