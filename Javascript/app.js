let btn = document.querySelector('#btn');
let oq = document.querySelector('#oq');

function dark (){
    if(oq.getAttribute('href') == './css/app.css'){
        oq.href = './css/style.css'
    }
    else{
        oq.href = './css/app.css'
    }
    console.log('hello');
}
btn.onclick = dark