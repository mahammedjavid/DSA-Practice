// !Hash Table
// ?Key must be string object
// In Array We cant identify the data
// in object we can store the data in key value pair

let user = {
  name: "Javid",
  place: "Kaup",
  number: 123,
  getInfo() {
    return `${this.name} from  ${this.place}`;
  },
};

let user2 = {};
user2.__proto__ = user;

// console.log(user2.getInfo());

// !Map
// ?key can be anything

let myMap = new Map([["Name", "javid"]]);
// console.log(myMap.keys());
// console.log(myMap.values());
myMap.set("Place", "Kaup");
// console.log(myMap.has("Place"));
// console.log(myMap.get("Place"));
// myMap.clear();

// for (let key of myMap) {
//   console.log(key);
// }
myMap.forEach((val, key) => {
  console.log(`${key} is ${val}`);
});

// !Set

let mySet = new Set(["name", "place", "number", { 1: "one" }]);

mySet.add("aaaaaaaaaaaa");
mySet.delete("name");
console.log(mySet);
