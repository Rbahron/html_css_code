const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const line = document.getElementById('line');
const line2 = document.getElementById('line2');

btn1.addEventListener('click',()=>{
    line.style.transform = 'translateX(-176px)';
    line2.style.transform = 'translateX(-176px)';
    line.style.width = '60px';
    line2.style.width = '60px';
})
btn2.addEventListener('click',()=>{
    line.style.transform = 'translateX(-80px)';
    line2.style.transform = 'translateX(-80px)';
    line.style.width = '68px';
    line2.style.width = '68px';
})
btn3.addEventListener('click',()=>{
    line.style.transform = 'translateX(35px)';
    line2.style.transform = 'translateX(35px)';
    line.style.width = '88px';
    line2.style.width = '88px';
})
btn4.addEventListener('click',()=>{
    line.style.transform = 'translateX(160px)';
    line2.style.transform = 'translateX(160px)';
    line.style.width = '90px';
    line2.style.width = '90px';
})