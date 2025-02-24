/* Exercise 1 */
console.log("hello world")

/* Exercise 2*/
let name = prompt("Enter Your Name:");
console.log(name);

// // Exercise 3
 let age= parseInt(prompt("enter your age:"));
 console.log("Name:",name ,"\n", "Age:",age)

 //Exercise 4
 let a="hello";
 let b=78;
 let c= true;
 console.log(a+b+c);
 console.log(b+c);
 console.log(a-b); // subracting string and number
 console.log(a-c); // subracting string and boolean
 console.log(b-c); //subracting number and boolean
 console.log(a*b); // multiple of string and number
 console.log(a*c); // multiple of  string and boolean
 console.log(b*c); //multiple of number and boolean
 console.log(a/b); //division of string and number
 console.log(a/c); //division of string and boolean
 console.log(b/c); //division of number and boolean

 
 //Exercise 5
 console.log("name:"+name+" age: "+age);

 //Exercise 6
 let name_ex6="rajeshwari";
 let age_ex6=20;
 console.log(name_ex6,age_ex6);

 //Exercise 7

 let number_1=56;
 let number_2=26;

 console.log("Addition",number_1+number_2);  //addition 
 console.log("Subraction",number_1-number_2);  // subraction
 console.log("Multiplication",number_1*number_2);  // Multiplication
 console.log("Division",number_1/number_2);  // division
 console.log("Reminder",number_1%number_2);  // modulus
 

 //Exercise 8
 let arr=["vidya","priya","deepika","venisha","vinitha","maheswari"];
 arr.forEach(element => {
    console.log(element);
 });

 //Exercise 9
const n=5;
const patt="*";
for(i=1;i<n;i++){
    console.log(patt.repeat(i));
}

//Exercise 10
let name_ex10="Shaji";
let age_ex10=21;
let isStudent=true;

console.log(typeof(name_ex10));
console.log(typeof(age_ex10));
console.log(typeof(isStudent));


//Exercise 11
let name_ex11=name_ex10;
age_ex10 =+1;
let isStudent_ex11=! isStudent;
console.log(name_ex11);
console.log(age_ex10);
console.log(isStudent_ex11);

//Exercise 12
let name_ex12="Sushmitha";
let age_ex12= 22;
let DOb = new Date("09/07/1002");
let height=145.5;
let weight= 44.0;
let degree= "I MCA";
let gender="Female";
console.log(typeof(name_ex12));
console.log(typeof(age_ex12));
console.log(typeof(DOb));
console.log(typeof(height));
console.log(typeof(weight));
console.log(typeof(degree));
console.log(typeof(gender));

