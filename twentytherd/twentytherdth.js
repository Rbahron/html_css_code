const year = document.querySelector('.year');
const month = document.querySelector('.month');
const dayNum = document.querySelector('.dayNum');
const dayName = document.querySelector('.dayName');

let date = new Date();

year.innerHTML = date.getFullYear();
month.innerHTML = date.toLocaleString('default',{month:'long'});
dayNum.innerHTML = date.getDate();
dayName.innerHTML = date.toLocaleString('default',{weekday:'long'});