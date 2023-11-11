
// // // // // // // // // // function circle2 (radius){
// // // // // // // // // //     return {
// // // // // // // // // //         radius,
// // // // // // // // // //          drov(){
// // // // // // // // // //              console.log("doira");
// // // // // // // // // //          }
// // // // // // // // // //     }function

// // // // // // // // // // }

// // // // // // // // // //  Company (radius){
// // // // // // // // // //     this.radius = radius;
// // // // // // // // // //     this.draw =function(){
// // // // // // // // // //         console.log("doira");
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // // const circle = {
// // // // // // // // // //     radius: 1,
// // // // // // // // // //     drow (){
// // // // // // // // // //         console.log("doira");
// // // // // // // // // //     }
// // // // // // // // // // };
// // // // // // // // // // const clone = {};
// // // // // // // // // // for (let key in circle)
// // // // // // // // // // clone[key] = circle[key];
// // // // // // // // // // console.log (clone);
// // // // // // // // // //  const clone =  Object.assign({color:"whte"},circle);
// // // // // // // // // // const clone = {...circle};
// // // // // // // // // //  console.log (clone);
// // // // // // // // // // let greating = " Assalomu alekum ";
// // // // // // // // // // console.log(greating.trim());
// // // // // // // // // // console.log(greating.includes("vd"));
// // // // // // // // // // console.log (greating.startsWith("assalomu"));
// // // // // // // // // // console.log(greating.indexOf("kum"));
// // // // // // // // // // const greating3 = greating.replace("salomu",'salama');
// // // // // // // // // // console.log(greating.toUpperCase());
// // // // // // // // // // console.log(greating3.toLowerCase());
// // // // // // // // // // let name = 'bahrom';

// // // // // // // // // // let text = `hi ${name}`;
// // // // // // // // // // console.log (text);
// // // // // // // // // // let numbers = ["uch","tort"];
// // // // // // // // // // numbers.push("besh","olti");
// // // // // // // // // // numbers.unshift("bir");
// // // // // // // // // // numbers.splice(1,0,"ikki");
// // // // // // // // // // console.log(numbers.indexOf(9)=== -1);
// // // // // // // // // // console.log(numbers);
// // // // // // // // // // console.log(numbers.includes('esh'b));
// // // // // // // // //  //  const laptops = [
// // // // // // // // // //     {id: 1, cpu:"i5"},
// // // // // // // // // //     {id: 5, cpu:"i6"},
// // // // // // // // // //     {id: 7, cpu:"i8"},
// // // // // // // // // // ];
// // // // // // // // // // // console.log(laptops.includes({id:1,cpu:"i5"}));
// // // // // // // // // // let laptop = laptops.findIndex(laptop => laptop.id === 5 );
// // // // // // // // // // console.log(laptop);
// // // // // // // // // // let numbers = [1,2, 3];
// // // // // // // // // // let number = numbers.pop();
// // // // // // // // // // console.log(number);
// // // // // // // // // // console.log(numbers);
// // // // // // // // // // let first = numbers.shift();
// // // // // // // // // // console.log(numbers);
// // // // // // // // // // console.log(first);
// // // // // // // // // // let numbers2 = [9,10];
// // // // // // // // // // let combined = [...numbers,...numbers2];
// // // // // // // // // // // for (let item of combined)
// // // // // // // // // // console.log(item);
// // // // // // // // // // combined.forEach((item,index) => console.log(item,index));

// // // // // // // // // // let numbers = [3, 2, 7, 4, 5, 1];
// // // // // // // // // // let course = [
// // // // // // // // // //     {id:1,title:"Redux"},
// // // // // // // // // //     {id:2,title:"Node.js"},
// // // // // // // // // //     {id:3,title:'aSP.Net core'}
// // // // // // // // // // ]
// // // // // // // // // // course.sort(function(first,second){
// // // // // // // // // //     let titlefirst = first.title.toLowerCase();
// // // // // // // // // //     let titlesecond = second.title.toLowerCase();
// // // // // // // // // //     if (titlefirst < titlesecond)return -1;
// // // // // // // // // //     if(titlefirst > titlesecond) return 1;
// // // // // // // // // //     return 0;
// // // // // // // // // // });
// // // // // // // // // // console.log(course);
// // // // // // // // // let numbers = [1,2,3,-4,5,6];
// // // // // // // // // let positive = numbers.some(function(number){
// // // // // // // // //     return number >= 0;
// // // // // // // // // });
// // // // // // // // // console.log(positive);
// // // // // // // // let number = [2,3,4,5,-6,7,8];
// // // // // // // // //  let items=filtered.map(number => "<li>"+ number + "</li>");
// // // // // // // // //  let html = "<ul>" + items.join(" "); + "</ul>";

// // // // // // // // let items = number
// // // // // // // //                 .filter(number =>number >= 0)
// // // // // // // //                 .map(number => {
// // // // // // // //                     return {value: number};
// // // // // // // //                 })
// // // // // // // //                 .filter(obj => obj.value > 3);
// // // // // // // // console.log(items);
// // // // // // // // let sum = 0;
// // // // // // // // for(let value of numbers)
// // // // // // // //  sum += value;
// // // // // // // let sum = numbers.reduce((accumilator,currentvalue) =>  accumilator + currentvalue,0);
// // // // // // //  console.log(sum);
// // // // // // let numbers = arrayresults(4,9);
// // // // // // console.log(numbers);
// // // // // // function arrayresults(min,max){
// // // // // //     let results =[];
// // // // // //     for(let i = min;i <= max; i++)
// // // // // //         results.push(i);
// // // // // //          return results;
// // // // // // }

// // // // // let numbers = [3,4,5,6,7];
// // // // // let exist = includes(numbers,8);
// // // // // console.log(exist);

// // // // // function includes(array,elementfind){
// // // // //     for(let element of array)
// // // // //       if(element === elementfind)
// // // // //         return true;
// // // // //     return false;
// // // // // }
// // // // let number = [1,2,3,4];
// // // // let run = move(number,0,1);
// // // // console.log(run);




// // // // function move (array,index,offset){
// // // //     let position = index + offset;
// // // //     if (position >= array.length || position < 0) {
// // // //        console.error('invalid offset');
// // // //        return;
// // // //     }
// // // //     let results = [...array];
// // // //     let element = results.splice(index,1)[0];
// // // //     results.splice(position,0,element);
// // // //     return results;

// // // // }\
// // // let numbers = [1,2,3,4,5,6];
// // // let maxnumber = getmaxnumber(numbers);
// // // console.log(maxnumber);



// // // function getmaxnumber(array){
// // //     if (array.length === 0)
// // //     return undefined;


// // //     // let maxnumber = array[0];
// // //     // for (l = 1;i < array.length;i++)
// // //     //     if (array[i] > met iaxnumber)
// // //     //     maxnumber = array[i];
// // //     // return maxnumber;
// // //    let maxnumber = array.reduce((a,b) => (a > b) ? a : b );
   

// // //    return maxnumber;

// // // }
// // function ready() {
// //     console.log("gap");

// // }
// // let write = function write(){
// //     console.log("soz");ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd  z*
// // * r****************eady();
// //  ********************************************w******roitae();

// function ready(a,b){
    
//     console.log(arguments);
//     console.log("oqi");
//     return a+b;
// }
// let write = function (){
//  console.log("gap");
// };
// let met = write;
// met();
// console.log(ready(1,1,1,2,3,5));
// function sum (discount,...args) {
//     let total=args.reduce((a,b) => a+b);
//     return total * (1- discount);
// }

// console.log(sum(0.1,40,60));
// function welcome (name = 'foydalanuvchi'){
//     console.log("xush kelipsiz, " + name);
// }
// welcome()
let person = {
    firstname: "Abdulla",
    lastname:"Qodiriy",
    get fullname() {
        return this.firstname + " "+ this.lastname;
    },
    set fullname (value) {
        if (typeof value !== "string")
        throw new Error("value string emas");
        let fullnamearray = value.split(" ");
        if (fullnamearray.length !== 2)
        throw new Error ("ismingiz sharafingiz");
        this.firstname = fullnamearray[0];
        this.lastname = fullnamearray[1];
    }
}
try
{
person.fullname = " "//"Alisher Navoiy";
}
catch (e) {
    console.log(e);
}
console.log(person);

let isbookshopopen = true;

let willgetnewbook = new Promise(
    function (resolve,reject){
        setTimeout(() =>{
        if (isbookshopopen){
            let book = {
                title:"The BIG book of knowledge",
                author:"Brown Watson"
            };
            resolve(book);
        } else {
            let reason = new Error ('Kitob do`koni yopiq ekan');
            reject(reason);
        }
    }, 1500 );
    }
);

willgetnewbook
    .then(result => console.log(result))
    .catch(error => console.log(error.message))