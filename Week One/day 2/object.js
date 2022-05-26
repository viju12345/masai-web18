// var person = {
//     name: "john",
//     myName: function () {
//         console.log(person.name)
//     }
// }
// person.myName()


// var man = {
//     name: "Mohan",
//     age: 23,
//     add: "villgaw",
//     fman: function () {
//         console.log(man.name)
//         console.log(man.age)
//         console.log(man.add)
//     }
// }
// man.fman()


// var person = {
//     name: "sohan",
//     team: "India",
//     add: "Palampur",
//     myName: function () {
//         console.log(this.name)
//         console.log(this.team)
//         console.log(this.add)
//     }
// }
// person.myName()


// function player(n, t) {
//     this.name = n;
//     this.team = t;
// }
// var myPlayer = new player("Messi", "Barselona")
// var otherPlayer = new player("sachin", "India")

// console.log(myPlayer)
// console.log(otherPlayer)


// function family(f, m, s, b) {
//     this.father = f;
//     this.mother = m;
//     this.sister = s;
//     this.brother = b;
// }

// var myFamily = new family("ramshakal", "meera", "nitu", "ajay")
// var mama = new family("jainath", "susama", "none", "vipin")
// var buaa = new family("jagdish", "gyanti", "none", "abhimanyu")

// console.log("myFamily", myFamily)
// console.log("mamaFamily", mama)
// console.log("buaa family", buaa)



// ---------------apply, call,bind------------------------------

// var person = {
//     name: "santosh",
//     age: 23,
// }
// var person2 = {
//     name: "pawan",
//     age: 34
// }
// function personName() {
//     console.log(this.name, this.age)

// }
// personName.call(person)
// personName.call(person2)


// var man = {
//     name: "vijay"
// }
// var man2 = {
//     name: "ajay"
// }
// function mens(a, j) {
//     console.log(this.name, a, j)
// }
// mens.call(man, 24, "asam");
// mens.call(man2, 26, "home");


// var man = {
//     name: "vijay"
// }
// var man2 = {
//     name: "ajay"
// }
// function mens(a, j) {
//     console.log(this.name, a, j)
// }
// mens.apply(man, [24, "asam"]);
// mens.apply(man2, [26, "home"]);


var man = {
    name: "vijay"
}
var man2 = {
    name: "ajay"
}
function mens(a, j) {
    console.log(this.name, a, j)
}
var mensbind = mens.bind(man, 24, "asam");
mensbind()
var mebind = mens.bind(man2, 26, "home");
mebind()