let btn = document.querySelector('#btn');
let moon = document.querySelector('#tun');

function dark (){
    if(moon.getAttribute('href') == './css/style.css'){
        moon.href = './css/app.css'
    }
    else{
        moon.href = './css/style.css'
    }
}
btn.onclick = dark