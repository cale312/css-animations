var loaderElems = document.querySelectorAll("span");
let timer = 0;

var bounce = () => {
    setInterval(() => {
        if (timer < loaderElems.length || timer === 0) {
            loaderElems[timer].classList.add("bounce");
            timer += 1;
        } else {
            setTimeout(() => {
                loaderElems.forEach((elem) => {
                    elem.classList.remove("bounce");
                });
                timer = 0;
            }, 400)
        }
    }, 100);
}

bounce();

// bilnking eyes animation

var eyes = document.querySelectorAll(".eye");
let x = 0;

var blink = () => {
    setInterval(() => {
        if (x === 0) {
            eyes.forEach((elem) => {
                elem.classList.add("blink");
            });
            x += 1;
        } else {
            setTimeout(() => {
                eyes.forEach((elem) => {
                    elem.classList.remove("blink");
                    x = 0;
                });
            })
        }
    }, 1000);
}

blink();
