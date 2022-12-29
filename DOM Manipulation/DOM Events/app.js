

const button = document.querySelector('#btn');
const heading = document.querySelector('#heading');

button.addEventListener('click', function(){
    heading.style.color = 'purple';
    heading.style.fontSize = '40px';
    console.log('Button Clicked');
});