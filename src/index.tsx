import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// type Foo = () => boolean

// // type Person<T> = {
// //   name: string;
// //   age?: T;
// // }
// let x: number = 10

// // let p1: Person<string> = {
// //   name: 'reza',
// //   age: "10"
// // }

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Student extends Person {
//   code: string;
// }

// const p2: Student = {
//   name: 'aaaa',
//   age: 10,
//   code: '1000'
// }

// const people: (Person | number)[] = []

// type NumberOrString = number | string | boolean;

// let y: NumberOrString;

// y = "qww"
// y = 10
// y = false

// function sum(a: number, b: number): number | boolean {
//   if(a === 0) {
//     return false;
//   }
//   return a + b;
// }

// const z = {
//   name: 'reza',
//   age: 50,
//   isAlive() {
//     return true;
//   }
// }

// const textbox = document.getElementById('root');
// textbox!.textContent = "10";

// class List<T> {
//   private arr: T[];

//   constructor() {
//     this.arr = [];
//   }

//   add(value: T) {
//     this.arr.push(value)
//   }

//   delete(value: T) {
//     const index = this.arr.indexOf(value)
//     if(index !== -1) {
//       this.arr.splice(index, 1)
//     }
//   }

// }

// const list = new List();
// list.add(10);
// list.add("aaa");

// list.delete(20);
