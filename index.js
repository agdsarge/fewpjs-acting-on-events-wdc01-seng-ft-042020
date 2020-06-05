// Your code here


const dodger = document.querySelector("#dodger")

document.addEventListener("keydown", function(e) {
    // console.log(e.key)
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()

    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
});

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {dodger.style.left = `${left - 12}px`};
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left < 360) {dodger.style.left = `${left + 12}px`};
}
