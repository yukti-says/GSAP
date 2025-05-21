# ✨ Text Animation with GSAP

Welcome to my `text-animation` project! This is a part of my journey to learn and master GSAP (GreenSock Animation Platform). In this project, I animated heading elements using `gsap.from()` to create smooth entrance effects.

---

## 🔤 What I Created

I animated an `<h1>` element (or multiple `<h1>` elements) so that it fades in and slides up from the bottom when the page loads. This simple yet elegant animation enhances how text appears on the screen, making the user experience more dynamic and engaging.

---

## ⚙️ Code Used

```js
gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 1,
  stagger: 0.5
});


## ✨ Text Animation with GSAP

This project is a part of my ongoing GSAP learning journey. In this practice, I animated text using `gsap.from()` to make heading elements appear smoothly with cool effects.

---

## 🔍 Explanation of Each GSAP Property

| Property       | Description                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------- |
| `opacity: 0`   | Starts the text completely transparent                                                          |
| `duration: 1`  | Animation lasts for 1 second                                                                     |
| `y: 30`        | The element starts 30px lower than its actual position and moves up                              |
| `delay: 1`     | Animation begins after a 1-second delay                                                         |
| `stagger: 0.5` | When multiple elements match the selector, they animate one after another with a 0.5s gap delay |

👉 The `gsap.from()` method tells GSAP to animate elements **from** these initial states **to** their default natural state on the DOM.


👉 The `gsap.from()` method tells GSAP to animate elements **from** these initial states **to** their default natural state on the DOM.



---

## 🧠 What I Learned

- How to use `gsap.from()` to make text elements appear with animation
- The importance of using `delay` to control when animations start
- How `stagger` makes it easy to animate multiple elements with timing gaps
- That simple properties like `opacity`, `y`, and `duration` can create beautiful effects when combined

---

## 🔭 What’s Next

Here’s what I’m planning to try next:

- Animate paragraph tags (`<p>`) and list items using similar techniques  
- Add easing functions (`ease`) to create more natural movement  
- Combine animations using `gsap.timeline()` for complex sequences  
- Explore hover-based animations and scroll-triggered effects  

---

## 📚 Part of My GSAP Learning Series

This is one of the many small projects I’m creating as I learn GSAP. I'm documenting not just the code, but also my process, understanding, intuition, and growth along the way.  
Stay tuned for more animated experiments!

---

