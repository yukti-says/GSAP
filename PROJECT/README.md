# Positivus Website Clone ( GSAP Project)

## 🌐 Project Overview

This is a **2-page animated clone** of the Positivus website created as part of my GSAP (GreenSock Animation Platform) learning journey. The website uses modern animation techniques to provide a smooth, interactive user experience with scroll-based and timeline-based animations.

## 🧠 What I Learned

From simple box transitions to layered, scroll-triggered animations, here are the key things I learned:

* **GSAP Timelines** for sequencing animations.
* **ScrollTrigger plugin** to animate elements as they enter the viewport.
* **Staggered animations** to animate multiple elements with delays.
* **Trigger points** (`start`, `end`, `scrub`) and fine-tuning scroll behavior.
* **Using JavaScript functions** to organize animation logic.
* **Combining GSAP with HTML & CSS** for responsive web animations.

## 🚀 Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla)
* GSAP 3 (via CDN)
* ScrollTrigger plugin

## 📁 File Structure

```
positivus-clone/
│
├── index.html            # Main page
├── style.css             # Stylesheet
├── script.js             # GSAP Animations
├── images/               # Assets
└── README.md             # Project Documentation
```

## 🔧 GSAP Code Highlights

### Landing Page Animation

```js
var tl = gsap.timeline();

tl.from("nav h1 , nav h4 , nav button", { y: -40, duration: 0.7, delay: 0.5, opacity: 0, stagger: 0.15 });
tl.from(".center-part1 h1", { x: -200, opacity: 0, duration: 0.5 }, "-=0.3");
tl.from(".center-part1 p", { x: -100, opacity: 0, duration: 0.4 });
tl.from(".center-part1 button", { opacity: 0, duration: 0.4 });
tl.from(".center-part2 img", { opacity: 0, duration: 0.5 }, "-=0.5");
tl.from(".section1bottom img", { opacity: 0, y: 30, stagger: 0.15, duration: 0.6 });
```

### Scroll-Triggered Section 2

```js
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2 ,.container",
    scroller: "body",
    start: "top 50%",
    end: "top 0",
    scrub: 2
  }
});

tl2.from(".services", { y: -30, opacity: 0, duration: 0.5 });
tl2.from(".elem.line1.left", { opacity: 0, duration: 1 });
```

### Section 3 and Beyond

```js
tl3.from(".main", { y: 300, opacity: 0 });
tl4.from(".all h2", { x: 30, opacity: 0 });
tl4.from(".all p", { x: -60, opacity: 0 });
```

---

## ✍️ My Learning Journey

I began my GSAP journey by animating simple elements like boxes, images, and buttons. Gradually, I moved to more complex animations involving:

* Scroll interactions
* Marquee effects
* Custom cursors
* Page load sequences

This **Positivus clone** is the culmination of that journey — where I brought together all the skills I learned in one neat, functional project.

## 🤖 AI-Powered Documentation

I used AI tools (like ChatGPT) throughout this journey to:

* **Structure my README files** for each project
* **Explain complex JS logic** while breaking them into human-understandable terms
* **Format markdown professionally** for platforms like GitHub and LinkedIn

## 💼 What’s Next?

* Building **GSAP-powered portfolio site**
* Learning **Locomotive Scroll** and combining with GSAP
* Adding **SVG animations** and interactive scroll components

---
