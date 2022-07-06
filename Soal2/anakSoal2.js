let data = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenbrough",
        zipcode: "92998 - 3874",
    },
    phone: "1-770-736-0831 x56442",
    website: "hildegard.org",
}

let { street, city } = data.address
console.log(`street : ${street}, city : ${city}`);