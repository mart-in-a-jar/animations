const svg = document.querySelector("#Triangles");

svg.addEventListener("click", e => {
    const colors = ["red", "blue", "green", "orange", "pink", "purple"]
    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    document.documentElement.style.cssText = `--red-color: ${randomColor()}; --green-color: ${randomColor()}`
});