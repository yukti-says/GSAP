# 🚀 GSAP ScrollTrigger Practice Project

This project is a hands-on practice of **GSAP ScrollTrigger**—a powerful plugin that lets you trigger animations based on scroll position. I used simple HTML sections and applied various scroll-triggered animations to understand how it all works.

---

## 📌 What I Wanted to Learn

I wanted to:

* Understand how scroll-based animations work
* Try `ScrollTrigger` from GSAP
* Learn how to pin, scrub, and animate based on scroll positions
* Improve user experience by triggering smooth animations when elements appear in view

---

## 🧠 Concept in My Words

### 👉 What is ScrollTrigger?

Imagine you have a long webpage and want animations to **happen as you scroll**. That’s where ScrollTrigger comes in. It lets you say:

> "Hey, when this part of the page scrolls into view, start this animation!"

So instead of all animations running as soon as the page loads, they wait for their turn—creating a **smoother and more interactive UI**.

---

## 🧪 What I Practiced

### ✅ Basic Setup

I created three pages: `#page1`, `#page2`, and `#page3`. Most animations happen on `#page2`.

### ✅ Sample ScrollTrigger Animation

```js
gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
});
```

## 💡 ScrollTrigger Options I Learned

| Property   | What It Does                                                               |
| ---------- | -------------------------------------------------------------------------- |
| `trigger`  | The element that activates the animation                                   |
| `scroller` | Defines which element is scrolling (`body` for full page)                  |
| `start`    | When the animation should start (e.g. `top 50%`)                           |
| `end`      | When the animation should end                                              |
| `scrub`    | Sync animation with scroll (can be `true`, `false`, or a delay in seconds) |
| `markers`  | Shows visual markers for debugging                                         |
| `pin`      | Freezes (pins) the element during scroll                                   |

## 🔍 Observations

Pinning requires triggering the parent element of what you want to animate.

Adding `scrub` makes animations follow scroll more naturally.

`start` and `end` define when and how long the scroll effect happens.

Using `markers: true` is very helpful during development.

## 🖥️ Files in the Project

| File         | Description                           |
| ------------ | ------------------------------------- |
| `index.html` | HTML layout for pages and sections    |
| `style.css`  | Styling and layout                    |
| `script.js`  | All GSAP and ScrollTrigger animations |


## 📦 How to Run

1. Clone the repo or download the ZIP

2. Open `index.html` in your browser

3. Scroll and enjoy the animations

Note: This project uses CDN links for GSAP and ScrollTrigger, so make sure you're connected to the internet.

## 🙋‍♀️ Made with Curiosity & GSAP

Built by Yukti Sahu to learn and visualize scroll-based animations.