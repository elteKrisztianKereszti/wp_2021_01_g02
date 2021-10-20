//#01 task
let x = [1, 2, 4, 5, 7, 8];
let sum = x.filter(n => n % 2 != 0).reduce((pv, cv) => pv + cv);
console.log(sum);


//#02 task
// b


//#03 task
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    return "Hello, my name is " + this.name;
  }

  myAge() {
    return "I'm " + this.age + " years old";
  }
};

let p = new Human('KK', 96);
console.log(p.hello()); // returns "Hello, my name is Alfred"
console.log(p.myAge()); // returns "I'm 696 years old"


//#04 task
//  b, d

//#05 task
document.addEventListener('click', (event) => {
  let target = event.target;
  if (target.tagName != 'BUTTON') {
    return;
  }

  if (target.className.indexOf('awesome') === -1) {
    return;
  }

  console.log(target.innerText);
})

// not optimal solution (cause a lot of event register):
// var buttons = document.querySelectorAll("button.awesome");
// [...buttons].forEach(button => {
//   button.addEventListener('click',()=>{
//     console.log(button.innerText)
//   })
// });

