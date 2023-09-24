


enum Role{
    ADMIN='admin',
    USER='user',
    READONLY='read only'
}

const userData={
    name:'sajjad',
    family:'maneshi',
    age:30,
    favorites:['musics','sports','swim'],
    role:Role.READONLY
}


let hobbies:any[];
hobbies=['test',1,true,[1,2]];
let anyVariable:any;
anyVariable='test';
anyVariable=1;
anyVariable=true;
anyVariable=[1,2]

console.log(userData.favorites);
for(let favorite of userData.favorites){
    console.log(favorite.toUpperCase());
}
if(userData.role===Role.READONLY){
console.log(`user role is ${userData.role}`)
}