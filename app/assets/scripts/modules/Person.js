// class Person {
//   constructor(name, favoriteColor) {
//     this.name = name;
//     this.favoriteColor = favoriteColor;
//   }
//
//   greet() {
//     console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//   }
// }
//
// export default Person;
//
//
// import Person from './modules/Person';
//
// if (module.hot) {
//   module.hot.accept();
// }
//
// /* Lesson example code below this line */
// class Adult extends Person {
//   payTaxes() {
//     console.log(this.name + " now owes zero taxes.");
//   }
// }