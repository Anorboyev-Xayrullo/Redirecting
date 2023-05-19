
let sum = document.querySelector(".same")
let btn = document.querySelector(".btn")


let bajarbrother = () => {
    let o = document.querySelector("h3")
    let n = document.querySelector(".num");
    let nt = document.querySelector(".num2");
    let numchabo = Number(n.value)
    let numchabot = Number(nt.value)    
    switch (sum.value) {
        case 'plus':
        o.textContent= numchabo+numchabot;
            break;
    }
    switch (sum.value) {
        case 'minus':
        o.textContent= numchabo-numchabot;
            break;
    }
    switch (sum.value) {
        case 'increment':
        o.textContent= numchabo*numchabot;
            break;
    }
    switch (sum.value) {
        case 'division':
        o.textContent= numchabo/numchabot;
            break;
    }
}

btn.addEventListener('click', bajarbrother)


