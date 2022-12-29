

const users = [{name : 'Prince'}, {name : 'John'}];

const user = users.findIndex((user) => {
    return user.name === 'Prince';
});

console.log(user);