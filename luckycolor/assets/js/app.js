let btn = document.getElementById('btn');

btn.addEventListener('click', omikuji);

function omikuji() {

  let res = [['black', 'ハンバーガー'], ['white', 'パスタ'], ['purple', 'ピザ'],['grey','タコス']];

  let randomNum = Math.random();
  let result = document.getElementById('result');


  console.log(Math.floor(randomNum * res.length));
  let num = Math.floor(randomNum * res.length);

  result.textContent = res[num][1];
  let bg = document.getElementById('bg');

  switch (num) {
    case 0:
      bg.style.backgroundImage = 'url("beef-bread-buns-3052264.jpg")';
      break;
    case 1:
      bg.style.backgroundImage='url("basil-blur-cheese-1279330.jpg")';
      break;
    case 2:
      bg.style.backgroundImage='url("blow-cheese-cuisine-723031.jpg")';
      break;
    case 3:
        bg.style.backgroundImage='url("blur-close-up-cuisine-2087748.jpg")';
      break;

    }}