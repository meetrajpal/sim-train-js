// // =================================== Closures ===================================

// function xyz(){
//     let a = 123;
//     function inside(){
//         console.log(a);
//     }
// }

// function Fn1() {
//   let a = 0;
//   this.increment = function inFn1() {
//     a++;
//     console.log(a);
//   };
//   this.decrement = function inFn1() {
//     a--;
//     console.log(a);
//   };
// }
// let counter1 = new Fn1();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.decrement();
// counter1.decrement();

// counter1 = undefined;

// function fn2() {
//   //   let i = 123;
//   for (var i = 1; i < 6; i++) {
//     function closed(s) {
//       setTimeout(() => {
//         console.log(s);
//       }, s * 1000);
//     }
//     closed(i);
//   }
//   console.log("fn2 called.");
// }

// fn2();

// // =================================== Functions ===================================

// // function statement AKA function declaration
// function fn1() {
//   return "\nfn1 called";
// }

// // function expression
// // anonymous function expression
// let fn2 = function () {
//   return "\nfn2 called";
// };

// // named function expression
// let fn3 = function fact() {
//   console.log(fact);
//   return "\nfn3 called";
// };

// // anonymous function
// // function (){
// //     return "\nanonymous fn called";
// // }

// // First Class Functions is ability of JS functions to be used as value, arguement and can be returned
// // Also this ability makes the functions First Class Citizens

// // Arrow functions
// let fn4 = () => {
//   return "\nfn4 called";
// };

// // Higher Order Functions are those functions which take other function as an argument

// document.getElementById("code").innerText = fn1() + fn2() + fn3() + fn4();

// // =================================== Reduce ===================================
// const arr = [45, 78, 65, 12, 32, 5];

// document.getElementById("code").innerText = arr
//   .reduce((sum, val) => {
//     return sum + val;
//   }, 0)
//   .toString();

// document.getElementById("code").innerText = arr
//   .map((x) => {
//     return x * 2;
//   })
//   .toString();

// document.getElementById("code").innerText = arr
//   .filter((x) => {
//     return x > 50;
//   })
//   .toString();

// const users = [
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donald", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deepika", lastName: "padukone", age: 26 },
// ];

// const ageCount = users.reduce((acc, cur) => {
//   if (acc[cur.age]) {
//     acc[cur.age]++;
//   } else {
//     acc[cur.age] = 1;
//   }

//   return acc;
// }, {});

// document.getElementById("code").innerText =
//   Object.keys(ageCount) + "\n" + Object.values(ageCount);

// document.getElementById("code").innerText = users
//   .filter((x) => {
//     return x.age < 30;
//   })
//   .map((x) => {
//     return x.firstName;
//   })
//   .toString();

// document.getElementById("code").innerText = users
//   .reduce((acc, cur) => {
//     cur.age < 30 ? acc.push(cur.firstName) : "";
//     return acc;
//   }, [])
//   .toString();

// // =================================== Arrow functions with this keyword ===================================

// class Car {
//   constructor(name) {
//     this.name = name;
//   }

//   printName() {
//     console.log("1: " + this.name);

//     console.log(this);

//     setTimeout(function () {
//       console.log("3: " + this.name);
//     }, 1000);

//     setTimeout(() => {
//       console.log("4: " + this.name);
//     }, 1000);
//   }
// }

// let car1 = new Car("BMW");
// car1.printName();

// // =================================== Prototypes ===================================

// function Car(name) {
//   this.name = name;

//   this.displayName = function () {
//     console.log(`The car is ${this.name}`);
//   };
// }

// const car1 = new Car("BMW");
// const car2 = new Car("Audi");

// console.log(car1);
// console.log(car2);

// function Car2(name) {
//   this.name = name;
// }

// Car2.prototype.displayName = function () {
//   console.log(`The car is ${this.name}`);
// };

// const car3 = new Car2("BMW");
// const car4 = new Car2("Audi");

// console.log(car3);
// console.log(car4);

// // =================================== Promise Chaining ===================================

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log("Response1 : ", response);
//     return fetch("https://jsonplaceholder.typicode.com/posts");
//   })
//   .then((data) => {
//     console.log("Response2 : ", data);
//     return fetch("https://jsonplaceholder.typicode.com/comments");
//   })
//   .then((data) => {
//     console.log("Response3 : ", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // =================================== Promise.all ===================================

// const lots0fFetchCalls = [
//   fetch("${BASE_URL}/1"),
//   fetch("${BASE_URL}/2"),
//   fetch("${BASE_URL}/3"),
//   fetch("${BASE_URL}/4"),
//   fetch("http://nope.nope"),
//   fetch("${BASE_URL}/6"),
// ];

// Promise.all(lotsOfFetchCalls)
//   .then((results) => {
//     console.log("Promise.all() is done and resolved!");
//     console.log(results);
//   })
//   .catch((e) => {
//     console.log("ONE of the promises was rejected");
//     console.log(e);
//   });

// // =================================== Promise.allSettled ===================================

// async function allSettledDemo() {
//   const GITHUB_BASE_URL = "https://api.github.com";
//   let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);
//   let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);
//   let badUrl = fetch(`http://definitelynotarealsite.com`);
//   let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);
//   let anotherbadUrl = fetch(`http://definitelynotarealsite.com`);
//   let results = await Promise.allSettled([
//     elieP,
//     joelP,
//     badUrl,
//     coltP,
//     anotherbadUrl,
//   ]);
//   console.log(results);
// }

// // =================================== Debouncing ===================================

// document
//   .getElementById("searchBox")
//   .addEventListener("keyup", debounce(handleSearch, 500));

// function handleSearch(e) {
//   console.log("Searching for : " + e.target.value);
// }

// function debounce(fn, delay) {
//   let timer = 0;
//   return function () {
//     let context = this,
//       args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

// // =================================== Throttling ===================================

document
  .querySelector("body")
  .addEventListener("resize", throttle(handleResize, 1000));

function handleResize(e) {
  console.log(e.target.offsetWidth);
}

function throttle(fn, delay) {
  let lastCall = 0;

  return function () {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, arguments);
    }
  };
}
