let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#image")

window.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
        x: event.x - 10,
        y: event.y - 10,
        duration: 0.5
    })
})

image.addEventListener("mouseenter", (event) => {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 4,
        background: "#ffffff85"
    })
})
image.addEventListener("mouseleave", (event) => {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        background: "#fff"
    })
})