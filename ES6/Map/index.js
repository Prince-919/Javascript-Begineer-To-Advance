

// Map

const urls = new Map();
// urls.set('key','value');
urls.set('development','dev.example.com');
urls.set('production','prod.example.com');
const find = urls.get('development');
console.log(urls);
console.log(find);