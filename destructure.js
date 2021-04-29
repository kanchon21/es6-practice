const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', phone: 17171717, town: 'kochu khet', friends: ['Tom Hanks', 'Tom Cruise', 'Laurie Laviens',]};
const { phone, gfName, town } = person;

// console.log(gfName, phone, town);
// console.log(gfName, phone, town);

const friends = ['sakib khan', 'salman khan', 'sahruk khan', 'aziz khan', 'mojid khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
// console.log(chotoFriend, nextFriend,);
// console.log(restFriends);

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const { leader } = complexObject.info;
console.log(leader);