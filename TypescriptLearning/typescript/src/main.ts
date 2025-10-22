// let name:string="ashok";
// let age:number=30;
// let isDevelper:boolean=true;

// console.log(name,age,isDevelper);

// let name:any="ashok";
// name=30;

// console.log(name);

// let numbers:number[]=[1,2,3]
// let fruits:string[]=["mango","banana","grapes"]
// console.log(numbers,fruits);

// let fruits:{name:string,color:string,price:number,taste:boolean}={
//   name:"apple",
//   color:"red",
//   price:100,
//   taste:true,
// }

// console.log(fruits); 
// console.log(fruits.name);


// let name:number|string;
// name=12323;
// name="ashok";
// console.log(name);


// const country:string="india"
// console.log(country)

// let persion:string|number|true;
// persion="ashok";
// persion=12344;
// persion=true;
// console.log(persion)


// let fruits:string[]=["mango","banana","grape"];

// let apple:{color:string,price:number,discount:boolean}={
//   color:"red",
//   price:100,
//   discount:true,

// }
// console.log(apple)

// let fruits:string[]=["apple","grape","banan"]
// console.log(fruits)

// let persion:[string,number]=["ashok",30];
// console.log(persion)



// const Direction = {
//   Up: 1,
//   Down: 5,
//   Left: 10,
//   Right: 15,
// } as const;

// console.log(Direction.Left); 


// function greet(name:string):string{
//   return "hello,"+name;
//  // return `hello ${name}`
// }
// console.log(greet("ashok"))

// function showMessage(message:string):void{
//   console.log(message)
// }

// showMessage("wellcome to typescript")

// function add(a:number,b:number):number{
//   return a+b;
// }


// console.log(add(10,20))

// const greet = function(name:string):string{
//   return `hello ${name}`;
// };

// console.log(greet("kumar"))

// const persion=function(name:string,age:number,department?:string){
//   return `the employee name is ${name} and his age is ${age} `
// }

// console.log(persion("ashok",30,))

// const add = (a:number,b:number):number => {
//   return a+b;
// }

// console.log(add(10,30))

// const persion =(name:string,department:string):string => {
//   return `the persion name is ${name}and his department is ${department}`
// }


// console.log(persion("ashok","java developer"))



// function name(name:string | number) {
//   return name
// }
// console.log(name("123355"))


// class Employee{
//   name :string;
//   age :number;
//   department:string;

//   constructor(name:string,age:number,department:string){
//     this.name=name,
//     this.age=age,
//     this.department=department
//   }
//   displayInfo(){
//     console.log(`the employe name is ${this.name} and his age is ${this.age} and his department is ${this.department} `)
//   }
// }

// let employee1 = new Employee("ashok",30,"developer");
// employee1.displayInfo();


// class Fruits {
//  public name:string;
//   public color:string;
//   private price:number;
//   constructor(name:string,color:string,price:number){
//     this.name=name,
//     this.color=color,
//     this.price=price
//   }
//   displayInfo():void{
//     console.log(`the fruit name is ${this.name} and its color ${this.color} and its price is ${this.price}`)
//   }
// }

// let fruit1 = new Fruits("apple","green",100);
// fruit1.displayInfo();

// let fruit2 = new Fruits ("banana","red",200);
// fruit2.displayInfo();

// console.log(fruit1.price)



// class Animal{
//   move(){
//     console.log("animal can move");
//   }
// }
//   class Dog extends Animal{
//     Bark(){
//       console.log("Dog can Bark");
//     }
//   }

//   let dog1 = new Dog();
//   dog1.move();
//   dog1.Bark();


  // class Employee{
  //   work(){
  //     console.log("employee can work");
  //   }
  // }

  // class Ashok extends Employee{
  //   walk(){
  //     console.log("ashok can run");
  //   }
  // }

  // let emp= new Ashok();
  // emp.work();
  // emp.walk();



// class Employee {
//   name: string;
//   age: number;
//   salary: number;

//   constructor(name: string, age: number, salary: number) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   work() {
//     console.log("Employee can do work");
//   }
// }

// class Ashok extends Employee{
//   department : string;
//   constructor(name:string,age:number,salary:number,department:string){
    
//     super(name,age,salary);
//     this.department=department;
//   }
// displayInfo(){
//   console.log(`${this.name}`)
// }
// }
 
// let emp = new Ashok("ashok",30,20000,"dev");
// emp.displayInfo();



// interface Student{
//   name:string;
//   age:number;
 
// }

// interface Player extends Student{
//   game:string;
// }

// const player:Player={
//   name:"rajesh",
//   age:34,
//   game:"cricket"
// }

// // const student:Student={
// //   name:"ashok",
// //   age:30,
// // }

// // const newStudent:Student={
// //   name:"kumar",
// //   age:35,
// // }


// console.log(player.name,player.game,player.age)

// type fruitTypes= string |number|boolean;

// interface Fruits{
//   name:fruitTypes;
//   color:fruitTypes;
//   price:fruitTypes;
//   isTaste:fruitTypes;
// }

// const fruits:Fruits={
//   name:"apple",
//   color:"red",
//   price:100,
//   isTaste:true,
// }
// console.log(fruits.name)



//generics

// function printValue(value:number):number{
//   return value;
// }
// console.log(printValue(45));

// function printString(value:string):string{
//   return value;
// }
// console.log(printString("ashok"));

// function printBoolean(value:boolean):boolean{
//   return value;
// }

// console.log(printBoolean(true));

// function printValue<T>(value:T):T{
//   return value;

// }
// console.log(printValue<string>("ashok"));

// function ids<T,U>(name:T,id:U):void{
//   console.log(`his name is ${name} and age is ${id}`);
// }
// ids<string,number>("ashok",1234);

// function person<T,U,V>(name:T,age:U,isPresent:V):void{
//   console.log(`his name is ${name} and age ${age} pesent ${isPresent}`)
// }
// person<string,number,boolean>("ashok",30,true)

// function student<T,U,V>(name:T,rollno:U,isPassed:V){
//   //return `student name is ${name} and his rollno is ${rollno} he passed is ${isPassed}`
//   //console.log(`student name is ${name} and his rollno is ${rollno} he passed is ${isPassed}`)
// return {name,rollno,isPassed}
// }
// console.log(student("ashdd",15,true))

//array function

// function fruit(name:string):string{
//   return "fruit name is "+name;
// }

// console.log(fruit("banana"))

// function fruits(names:string[]):string[]{
//  // return "fruits names are "+names;
//  return names.map(name =>"fruits name is"+name);
// }

// console.log(fruits(["mango","banana","grape"]));

// function employee(name:string[]):string[]{
//   return name.map(name => "person name is" +name);
// }

// console.log(employee(["ashok","kumar","raja"]));

// function students(names:string[]):string[]{
//   return names.map(name =>"student name is"+name);
// }
// console.log(students(["ashok","kumar","raju"]))

// function phones<T,U>(name:T[],id:U[]){
//   return name.map((name,index) => "phone name is" +name +"and id is"+id[index]);
// }
// console.log(phones(["vivo","samsung","oppo"],[2,3,4]));

// console.log(phones<string,string>(["ashok","rang","raj"],["2","3","2"]))


//generic interface

// interface Phones{
//   name:string;
//   id:number
// }

// const phone1:Phones={
//   name:"vivo",
//   id:101,
// };

// const phone2:Phones={
//   name:"oppo",
//   id:102,
// }

// console.log(phone1);
// console.log(phone2);



// interface Phones<T,U>{
//   name:T;
//   id:U;
// }

// const phone1:Phones<string,number>={
//   name:"vivo",
//   id:101,
// };

// const phone2:Phones<string,number>={
//   name:"oppo",
//   id:102,
// }

// console.log(phone1);
// console.log(phone2);


// interface Fruits<T,U>{
//  readonly name:T;
//   price:U;
// }

// const fruit1:Fruits<string,number>={
//   name:"apple",
//   price:100,
// };
// fruit1.price=150;
// fruit1.name="grape"
// const fruit2:Fruits<string,number>={
//   name:"banana",
//   price:200
// }

// console.log(fruit1);
// console.log(fruit2);

// interface Fruits{
//  readonly id?:number;
//   name:string;
//   price:number;
// }

// const fruit1:Fruits={
// id:1,
// name:"banana",
// price:100,
// }
// fruit1.name="grape";
// fruit1.price=150,

// console.log(fruit1);


//extending interface
// interface Person{
//   name:string;
//   age:number;
// }

// interface Employee extends Person{
// salary:number
// }

// const person1:Employee={
//   name:"ashok",
//   age:30,
//   salary:50000
// }

// console.log(person1);


// interface Person{
//   name:string;
//   age:number;
// }

// interface Employee extends Person{
//   salary:number;
// }


// const emp1:Employee={
//   name:"kumar",
//   age:20,
//   salary:20000
// }
//  console.log(emp1)



interface Person{
  name:string;
  age:number;
}

interface Employee extends Person{
  salary:number;
}

class Worker implements Employee{
  name:string;
  age:number;
  salary:number;
  constructor(name:string,age:number,salary:number){
    this.name=name;
    this.age=age;
    this.salary=salary;
  }
displayInfo():void{
  console.log(`his name is ${this.name} and age is ${this.age} and his salary ${this.salary}`)
}
}

const person1=new Worker("ashok",30,10000);
person1.displayInfo();

 