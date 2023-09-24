var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["READONLY"] = "read only";
})(Role || (Role = {}));
var userData = {
    name: 'sajjad',
    family: 'maneshi',
    age: 30,
    favorites: ['musics', 'sports', 'swim'],
    role: Role.READONLY
};
var hobbies;
hobbies = ['test', 1, true, [1, 2]];
console.log(userData.favorites);
for (var _i = 0, _a = userData.favorites; _i < _a.length; _i++) {
    var favorite = _a[_i];
    console.log(favorite.toUpperCase());
}
if (userData.role === Role.READONLY) {
    console.log("user role is ".concat(userData.role));
}
