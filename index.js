'use strict'

var photoNike = [
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png',
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png',
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png',
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png',
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png'
];

var slider = document.getElementById('slider');

slider.src = photoNike[0];

let i = 0;
let timer = setInterval(function(){
  if (i > photoNike.length - 1){
    i = 0;
  }
  slider.src = photoNike[i];
  i++;
}, 5000);