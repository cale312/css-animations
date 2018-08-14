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
