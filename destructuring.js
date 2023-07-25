// Destructuring arrays
let ages = [30, 26, 27];
let [john, mary, joe] = ages;
console.log(ages);

//destructuring objexts

let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'acccountant',
};

let{mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

//Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages
console.log(maryNative, marySecondary)

let languages2 = {
    firstLanguange: 'english',
    secondLanguage: 'french',
    thirdLanguange: 'german',
    fourthLanguege: 'japanese',

};

let { firstLanguange, thirdLanguange} = languages2;
console.log(firstLanguange, thirdLanguange);

// Using rest parameter syntax
let fruits = ['apple', ' orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
};

let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);