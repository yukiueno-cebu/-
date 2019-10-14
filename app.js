let btn = document.getElementById('btn');

btn.addEventListener('click', omikuji);

function omikuji() {
  // 0 ~ 4
  let res = ['大吉', '吉', '中吉', '凶', '大凶'];
  let randomNum = Math.random();
  let result = document.getElementById('result');

  // Math.floor
  // Math.ceil
  // Math.round
  // 0, 1, 2, 3, 4

  // console.log(Math.floor(randomNum * res.length));
  let num = Math.floor(randomNum * res.length);

  result.textContent = res[num];
}