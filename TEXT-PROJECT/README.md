# GSAP Scroll-Based Marquee Animation

This project demonstrates a scroll-driven marquee animation using **GSAP** (GreenSock Animation Platform). It animates a series of repeating text-image pairs across the screen based on the user's scroll direction.

---

## 🚀 Features

* **Scroll Detection**: Listens to the mouse wheel scroll using the `wheel` event.
* **Horizontal Text Movement**: Marquee text scrolls left or resets based on scroll direction.
* **Image Rotation**: The arrow image rotates based on the scroll direction.
* **Seamless Loop**: Animation repeats infinitely for smooth continuous flow.

---

## 🧠 Core Concepts Used

### 1. **Scroll Direction Detection**

```javascript
window.addEventListener("wheel", function (dets) {
  // dets.deltaY > 0 means scroll down
  // dets.deltaY < 0 means scroll up
});
```

### 2. **Marquee Animation with GSAP**

```javascript
gsap.to(".marque", {
  transform: "translateX(-200%)",
  duration: 5,
  ease: "none",
  repeat: -1
});
```

* **translateX(-200%)**: Moves elements far to the left for marquee effect.
* **repeat: -1**: Ensures the animation loops infinitely.

### 3. **Rotate Images Based on Scroll Direction**

```javascript
gsap.to(".marque img", {
  rotate: 180
});
```

---

## 📁 File Structure

```
project-folder/
├── index.html
├── style.css
├── script.js
```

---

## 💡 How It Works

1. The HTML contains multiple `.marque` elements inside a container.
2. When the user scrolls:

   * If scrolling **down**, the text moves left (`translateX(-200%)`) and arrow rotates to `180deg`.
   * If scrolling **up**, it resets to the starting position and arrow rotates back to `0deg`.
3. GSAP ensures the movement is smooth and continuous.

---


## 📦 Dependencies

* [GSAP v3.13.0](https://greensock.com/gsap/)

---

## 🙌 Author

**Yukti Sahu**
An enthusiastic developer exploring GSAP animations!

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

> "Thrive beyond limits." ✨
