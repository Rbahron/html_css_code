const btn = document.getElementsById('btn');

btn.addEventListener('click',() =>{
    document.getElementsById('header').innerHTML = 'sign up';
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.container').style.width = '400px';
    document.querySelector('.input').style.display = 'none';
    document.querySelector('.pass').style.display = 'none';
    document.querySelector('.signUp').style.display =  'block';
    document.querySelector('.signUp').style.transform = 'translate(80px)';
    document.querySelector('.btn').innerText = 'Sign Up';
    document.querySelector('.btn').style.transform = 'translate(70px)';
    document.querySelector('.btn').style.backgroundColor = 'rgb(26,202,85)';
})