# 🎯 Custom Cursor Animation with GSAP

This mini-project demonstrates how to create a **custom animated cursor** using **HTML, CSS**, and **GSAP**.  
The cursor follows your mouse and scales up when hovering over a specific element.

---

## 📌 What I Learned

- How to create and style a custom cursor
- Use JavaScript to track mouse movement
- Animate cursor position using **GSAP**
- Scale cursor on hover using event listeners

---

## 🧠 Concept in My Words

> I used `mousemove` events on the `#main` div to make a custom cursor (`#cursor`) follow the mouse using **GSAP's `to()`** method.

> When the cursor enters the image, it grows (`scale: 2`), and when it leaves, it goes back to normal size (`scale: 1`).

---

## 📁 Project Structure

| File        | Description                            |
|-------------|----------------------------------------|
| `index.html`| Contains the HTML layout               |
| `style.css` | Custom styling for the cursor & layout |
| `script.js` | GSAP logic for movement and scaling    |

---


## How to Run

1.Clone the repo or download the files
2.Make sure the folder has:

`index.html`
`style.css`
`script.js`

3.Open index.html in your browser
4.Move your mouse and see the animated cursor
5.Hover over the image to see the cursor scale up

## 🧠 Key Learning Points

👉Make cursor change color or icon on hover
👉Add click effect or ripple animation
👉Use `ScrollTrigger` to sync with scroll behavior

