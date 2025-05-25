# GSAP Text Split Animation Project

This project is a small yet powerful demonstration of how to animate text characters using **GSAP** by splitting the text content of an HTML element into spans and applying staggered animations.

---

## 🚀 What I Learned

### 🔤 1. Breaking Text into Spans

* I selected the `h1` element.
* I used `textContent` to get only the text inside it.
* I split the text into an array using `.split('')`, which converts every character into a separate array element.
* Then, I looped through this array using `forEach()` and wrapped each character inside a `<span>`.

### 🧠 2. Logical Division of Characters

* I used `Math.floor(splittedText.length / 2)` to divide the text into two equal halves.
* If the character index (`idx`) is less than half the length, I wrapped it with a class `.a`, otherwise with class `.b`.
* This helped me apply different staggered animations to two halves of the heading.

### 💡 3. Functions & DOM Manipulation

* **`breakTheText()`** is a function I created to encapsulate the splitting logic.
* I updated the HTML using `innerHTML` to replace the content of `h1` with the newly created span-wrapped version.

---

## 💻 HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scrolling Text</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Yukti's Dev</h1>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>
```

---

## 📜 JavaScript (script.js)

```js
function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split('');
    
    var clutter = "";
    var halfValue = Math.floor(splittedText.length / 2);

    splittedText.forEach(function (e, idx) {
        if (idx < halfValue) {
            clutter += `<span class='a'>${e}</span>`;
        } else {
            clutter += `<span class='b'>${e}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

breakTheText();

// Animate First Half
gsap.from("h1 .a", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
});

// Animate Second Half
gsap.from("h1 .b", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0
});
```

---

## 🎯 Summary

This project gave me hands-on experience with:

* Breaking down text dynamically using JavaScript
* Using `forEach` and string manipulation
* DOM manipulation with `innerHTML`
* Powerful GSAP staggered animations

This is a foundational step toward more interactive and creative frontend animations!
