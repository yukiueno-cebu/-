 let btn = document.getElementById("btn");
 btn.addEventListener('click',omikuji);
 
 
 
 
 function omikuji (){

let res = ['大吉','吉','中吉','凶','大凶'];
let randomNum = Math.random();
let num = Math.floor(res.length * randomNum);
let result = document.getElementById('result');


result.textContent = res[num];
 }

 