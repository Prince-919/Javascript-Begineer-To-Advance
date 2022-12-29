const users = [{ name: "Prince" }, { name: "John" }];

const user = users.find((user) => {
    return user.name === 'Prince';
});

console.log(user);
