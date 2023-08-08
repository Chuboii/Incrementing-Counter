let num = document.querySelectorAll(".num")


function increment() {
    num.forEach(el =>{
        el.innerHTML = '0'
        function update() {
            let target = +el.getAttribute("data-target")
            let increment = target / 200
            let numberText = +el.innerHTML
            console.log(numberText);

            if (numberText < target) {
                el.innerHTML = Math.floor(increment + numberText)
                setTimeout(update, 1)
            }
            else{
                el.innerHTML = target
            }
        }

        update()
    })
}

window.addEventListener("load", increment)