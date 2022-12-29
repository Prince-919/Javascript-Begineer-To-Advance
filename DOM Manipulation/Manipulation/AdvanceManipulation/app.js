

const heading = document.createElement('h1');
heading.innerHTML = 'Javascript is awesome';
heading.classList.add('title');
const parent = document.querySelector('.parent');
parent.appendChild(heading);
console.log(heading);

const subHeading = document.createElement('h3');
subHeading.classList.add('sub-title');
subHeading.innerHTML = 'Web dev is awesome';
heading.insertAdjacentElement('beforebegin',subHeading);