// console.log(`hello`);
// window.alert(`dik`);

// let age =100;
// let name =  "Dik";

// console.log(`you are ${age} year old than your mom`);
// console.log (typeof name);

// function solve(){
//    var age = 99;
//    console.log(age);
// }
// solve()
// {
// let x = 10;
// console.log(x)
// }

// // Re assignment using 'let'

// let x = 10;
// console.log(x);    // Output : 10

// x = "Mayank";
// console.log(x);    // Output : Mayank

// let x= 100;
// console.log(x)

// x="mayaank"
// console.log(x)

// const x = 100;
// console.log(x)

// x= "meirl"
// console.log(x)

// const person ={
//     name: "mayank",
//     age: 12
// }
// console.log(person.name)

// person.name= 'love';
// console.log(person.name)

// const numbers= [1,2,3]

// numbers.push(4);

// console.log(numbers)

// let a = 1000;
// let b = 2000;
//  console.log (a*b)

// let age= 18;

// if(age=>18){
//   console.log("vote")
// }
// else
// console.log("NOVOTE");

// console.log("A"-1);
// console.log('lund'+'100')
// console.log('2'+2+'2')
// console.log('2'+2-'2')

// let arr = [1,2,3,4];
// let k = [];
// k = arr.map((e) => e>2);
// console.log(k);

// let arr = [1,2,3,4];
// let k = [];
// k = arr.filter((e) => e>2);
// console.log(k)

// let number= 10;
// let age=18;

// if(number==1){
//   console.log("A")
// }
// else if(number==5){
//   console.log("B")
// }
// else if(number==10){
//   if(age=>18){
//     console.log("age is just a number")
//   }
//   console.log("C")
// }
// else{
// console.log("STFU")
// }

//  for(let i=1;i<100;i++){
//    console.log(i)
//  }

// for(let i=1; i<=4;i++){
//   if(i==3)
//     continue;
//   else
//   console.log(i)
// }

// let i=1;
// while(i<5){
//   if(i==3)  //wrong ass
//     continue;
//   else
//   console.log(i)
// i++
// }

// let i=1;
// while(i<=5){
//   console.log("LOOP")
//   if(i==3){
//      i++;
//     continue;
//   }
//   else
//   console.log(i)
// i++
// }

// let sum = 0;
// let count = 1;
// do{
//     sum = sum + count;
//     count = count + 1;
// }while(count <= 10);

// console.log(sum);

// let age=100;
// let name= `lund khada
// hua hai`

// console.log(`You are ${age} yearyounger than your ${lund} `);
// console.log(typeof age)

// let fruits = ['Apple', 'Banana', 'Grapes', 'Chiku'];

// fruits.forEach(function(fruit){
//   console.log(`I LOVE ${fruit}`)
// })

// let numbers=[1,2,3,4,5]
// numbers.forEach(function(number, index){
//   console.log(`Element at ${index}:${number}`)
// })

// let sentence= "I WANNA SEE YOU MORE RIGHT NOW"
// let words = sentence.split(" ");
// console.log(words)
// console.log(words.join("-"))

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); 

//  const array = [1,2,3,4,5]
//  const result = array.map(array=>{
//   return array>2
//  });
//  console.log(result)

// function curry(a) {
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// console.log(curry(1)(2)(3));

// function printcounting(){
// for(let i=1;i<=5;i++){
//   console.log(i);
// }
// }
// printcounting();

// function printnumber(numb){
//   console.log("printNumber:" ,numb)
// }
// printnumber(5)

// function average(num1,num2){
//   let avg=(num1+num2)/2;
//   console.log("average= ",avg)
// }
// average(3,4)

// function getMyName(firstName,LastName){
// let FullName = firstName+LastName
// return FullName;
// }
// let FullName=getMyName("bitch","love");
// console.log("myBitchNameis =" ,FullName)

// function Multi(a,b){
// return a*b
// }
// let ans=console.log(Multi(2,2))

// let ans= function multi(a,b){
//     return a*b
// }
// let newans= ans(2,10)
// console.log(newans)

// let answer = function(a){
//     let ans = a**2
//     return ans;
// }
// console.log(answer(5))

// const greed = (name)=>{
//     return `Hello ${name}!`
// }
// console.log(greed("Nikhil"))

//  let data = [true, 'ab', "great", 34];
//  console.log(typeof(data.at(0)))

// function sum(sum1,sum2){
// let result= sum1+sum2
//     return result;
// }
// console.log(sum(2,3))

// let obj = {
//     name_rand: "lund"
// }
// console.log(obj)

// const numbers= new Array(1,2,"lalala")
// console.log(numbers[2])

// const fruits=[`banana`,`fruits`,`weed`,`samosas`]
// console.log(fruits[fruits.length-1])
// fruits.shift()
// fruits.unshift("mangoes")
// console.log(fruits)
// console.log(fruits.slice(1,4))

// const fruits=[`banana`,`fruits`,`weed`,`samosas`];{
// fruits.splice(1,2,'pomegranate')
// console.log(fruits)
// };
// fruits.splice(0,2,'pomegranate')
// console.log(fruits)

// let arr = [1,2,3,4,5]
// let map= arr.map((figures)=>{
//     return figures*figures
// })
// console.log(map)

//  let arr = [1,2,3,4,5]
// let map= arr.map((figures)=>{
//      console.log(figures*figures)
// })

// let arr= [10,20,30,44,55,66,77,88,99,1021]
// let ans=arr.filter((number)=>{
//     if(number%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans)

// let arr= [10,20,30,44,55,66,77,88,99,1021]
// let ans=arr.filter((number)=>{
//     return number%2===0
// })
// console.log(ans)

// const arr = [5, 12, 8, 130, 44];
//  arr.sort((a,b) => a-b)
// //  arr.sort((a,b) => b-a)
//  console.log(arr)
// const found = arr.find(num => num > 10);
// console.log(found);

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.forEach((number,index)=>{
//     console.log(`Element ${index}:${number}`)
// })

// let numbers = [1, 2, 3, 4, 5, 6, 7];
//  numbers.forEach(function(number,index){
//      console.log(`Element ${index}:${number}`)
//  })

// let arr=[10,20,30];
// let length= arr.length;
//     console.log(`length =`,length);
 
// for(let index=0;index<length;index++){
//     console.log(arr[index])
// }

// arr.forEach((value,index) => {
//     console.log("Number: ",value,"index: ",index)
// });

// let arr=[10,20,30,40]
// for(let value of arr){
//     console.log(value);
// }

// let namee="whatthefuckareudoing"
// for(let value of namee){
//     console.log(value);
// }

// let arr=[10,20,30,40,50]
// function getSum(arr){
//     let sum=0;
//     arr.forEach((value)=>{
//         sum=sum+value;
//     })  
//     return sum;
// }
// let tsum=getSum(arr)
// console.log(tsum)

// function greetMe(greet, FullName){
//     console.log("Hello",FullName)
//     greet()
// }
// function greet(){
//     console.log("greetings")
// }
// greetMe(greet,"Nikhil");

// function solve(number){
//     return function(number){
//         return number*number
//     }
// }
// let ans=solve(5);
// let finalans=ans(100);
// console.log(finalans);

// const arr=[
//     function(a,b){
//         return a+b;
//     },
//      function(a,b){
//         return a-b;
//     },
//      function(a,b){
//         return a*b;
//     },
// ];
// let first= arr[2]
// let ans=first(2,2);
// console.log(ans)

// let obj={
//     namee: 1,
//     age: 20,
//     height:6,
//     weight: 50,
//     greet: ()=>{
//         console.log("HWLOO BEACHES");
//     }
// }
// console.log(obj.namee)
// obj.greet()

// class Human{
//     age= 20;  //public
//     #wt=50; //private
//     ht=183;

//     constructor(newAge,newWeight,newHeight){
//     this.age=newAge;
//     this.#wt=newWeight
//     this.ht=newHeight
// }
// }
// let obj= new Human(50,10,40);
// console.log(obj.ht);
// console.log(obj.age);

// function sayMyName(myname="LOL"){
//     console.log("My Name Is: ",myname)
// }
// sayMyName("r");

// let source={
//     age:12,
//     weight:50,
//     height:183,
// };

// let destination= {...source};
// source.age=90;

// console.log("src= ",source)
// console.log("destination= ",destination)

// console.log("start!")

// setTimeout(()=>{
//     console.log("click the button");
// },5000);

// console.log("END")

// let firstPromise = new Promise((reslove,reject)=>{
//     console.log("Nikhil")
//     reject(new Error("Server Error"));
// });  

// let sayMyName=(()=>{
//     console.log("Nikhil")
// });
// setTimeout(sayMyName,10000);

// let promise1 = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("promised fuckedup")
//     }
// })
// promise1.then((message)=>{
//     console.log("dgdgdngdjgndg" +message);
// }).catch((error)=>{
//     console.log("error: " +error);
// })

// let promise1 = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("promised fuckedup")
//     }
// })
// promise1.then((message)=>{
//     console.log("first message:" +message);
//     return "message1";
// }).then((message)=>{
//     console.log("second message:" +message);
//     return "message2";
// }).then((message)=>{
//     console.log("third message" +message);
//     return "message3";
// }).catch((error)=>{
//     console.log(error);
// }).finally((message)=>{
//     console.log("mai to chutiya hu chalunga")
// })

