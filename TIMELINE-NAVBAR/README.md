# 📱 Responsive Navigation Bar using GSAP

This project showcases a clean, animated **mobile-style navigation menu** built with **HTML, CSS**, and **GSAP**.
The menu slides in from the right and reveals navigation links with smooth staggered animation.

---

## ✅ What I Learned

* Creating responsive navigation with a slide-in effect
* Using GSAP's timeline to manage multiple animations
* Controlling animation playback with `.play()` and `.reverse()`
* Staggering elements to animate them one-by-one

---

## 🔧 Technologies Used

| Tool       | Purpose              |
| ---------- | -------------------- |
| HTML       | Structure            |
| CSS        | Styling              |
| GSAP       | Animation engine     |
| Remix Icon | Menu and Close icons |

---

## 🧠 My Understanding

> The navigation bar initially shows only the brand name and a hamburger icon.
> On clicking the menu icon (`ri-menu-3-line`), a full-screen menu (`#full`) slides in from the right.
> Each navigation item (`h4`) animates in from the right using **GSAP timeline** with a **stagger effect**.
> The close icon (`ri-close-line`) reverses the timeline to hide the menu.

---

## 💻 Folder Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📂 HTML Structure

```html
<div id="main">
  <div id="nav">
    <h2>Yukti's Dev🚀</h2>
    <i class="ri-menu-3-line"></i>
  </div>

  <div id="full">
    <h4>Work</h4>
    <h4>Projects</h4>
    <h4>Services</h4>
    <h4>About</h4>
    <h4>Contact Me</h4>
    <i class="ri-close-line"></i>
  </div>
</div>
```

---

## 🎨 CSS Highlights (Example)

```css
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

#full {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

---

## 🚀 GSAP Animation (script.js)

```js
var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.5
});

tl.from("#full h4", {
  x: 150,
  duration: 0.6,
  stagger: 0.2,
  opacity: 0
});

tl.from("#full i", {
  opacity: 0
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

close.addEventListener("click", function () {
  tl.reverse();
});
```

---

## 🧪 Behavior

* ✅ Click on menu icon to open full-screen nav
* ✅ Nav links animate in from right with delay
* ✅ Click on close icon to reverse animation and hide menu

---

## 🔗 External Links

* **[GSAP Documentation](https://gsap.com/docs/)**
* **[Remix Icons](https://remixicon.com/)**

CDNs used:

```html
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>

<!-- Remix Icon -->
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet" />
```

---

## 💡 Ideas to Extend

* Add active link highlights
* Add menu items with smooth scroll behavior
* Add dark/light theme toggle inside the menu
* Animate individual letters or underline on hover

---

## 👩‍💼 Made By

Created with 🎨 and 💻 by **Yukti Sahu**

📸 [X – yuktisahu](https://x.com/YuktiSahu234)
👥 [GitHub – your-username](https://github.com/yukti-says)

---

## 📜 License

This project is for learning and portfolio usage.
Feel free to use, modify, and give credit 💖.
