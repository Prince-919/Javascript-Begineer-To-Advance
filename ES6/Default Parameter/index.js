

// default parameter

const register = (name, password, image = 'test.png') => {
    // Old javascript
    // const img = image || 'test.png';

    console.log(name, password, image);
}
register('Prince',12345, 'photo.jpg');

// Spread
// Arrays
const language = ['C','Python','Java'];
// create an array and copy all element to store new array
const newLanguage = ['Javascript',...language,'C++'];
console.log(language);
console.log(newLanguage);

// object spread
// old Method

// const settings = {
//     volume : 10,
//     brightness : 80, 
// }

// const newSettings = settings;  // by Reference

// newSettings.volume = 30;
// console.log(settings.volume);

const settings = {
    volume : 20,
    brightness : 70,

}

const newSettings = {...settings, contrast : 40};
console.log(newSettings);