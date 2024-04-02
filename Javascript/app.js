let btn = document.querySelector('#btn');
let moon = document.querySelector('#tun');
let moon1 = document.querySelector('#moon1');
let sun = document.querySelector('#sun');

function dark (){
    if(moon.getAttribute('href') == './css/style.css'){
        moon.href = './css/app.css'
         sun.style.display = "block"
         moon1.style.display = "none"
    }
    else{
        moon.href = './css/style.css'
        sun.style.display = "block"
        moon1.style.display = "none"
    }

}
moon1.onclick = dark

function dark1 (){
    if(moon.getAttribute('href') == './css/app.css'){
        moon.href = './css/style.css'
        sun.style.display = "none"
        moon1.style.display = "block"
    }
    else{
        moon.href = './css/app.css'
        sun.style.display = "none"
         moon1.style.display = "block"
    }

}
sun.onclick = dark1