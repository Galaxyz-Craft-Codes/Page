

function redimensionar() {
    const tm = window.innerWidth

    if (tm <= 480) {
        document.querySelector(".i1, .i2, .i3").classList.add("phone")
    }
}

redimensionar()

window.addEventListener('resize', redimensionar);